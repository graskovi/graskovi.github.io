import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  Card, CardActionArea, CardContent, CardHeader, Collapse, Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HttpIcon from '@material-ui/icons/Http';
import LinkIcon from '@material-ui/icons/Link';

const styles = {
  innerContent: {
    marginLeft: '2em',
    marginRight: '2em',
  },
  // TODO all 3 below are unused: link for removing old-feel of anchors,
  // name (or title) for styling card header
  link: {
    textDecoration: 'none',
  },
  name: {
    // textAlign: 'left',
    marginLeft: '1em',
    marginRight: '1em',
  },
  rowEnd: {
    align: 'right',
    textAlign: 'right',
  },
};

const StyledCardHeader = styled(CardHeader)({
  color: 'purple',
  borderColor: 'black',
  borderRadius: 2,
  textAlign: 'left',
  textShadowColor: 'black',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
});

const isLinkExternal = (linkUrl) => linkUrl.startsWith('http');

const linkWrapper = (linkUrl, children) => {
  if (isLinkExternal(linkUrl)) {
    return <a href={linkUrl} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link to={linkUrl}>{children}</Link>;
};

const isTargetNav = (target) => target.tagName === 'A';

const navWrapper = (linkUrl, description, project) => {
  if (linkUrl && !description) {
    return linkWrapper(linkUrl, project);
  }
  return project;
};

const Project = ({
  name, dates, position, description, linkUrl,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  let descriptionElem = null;
  if (description) {
    if (Array.isArray(description)) {
      descriptionElem = description.map((data) => (
        <Typography paragraph>
          {data}
        </Typography>
      ));
    } else {
      descriptionElem = (
        <Typography paragraph>
          {description}
        </Typography>
      );
    }
  }

  return navWrapper(linkUrl, description, (
    <div>
      <Card
        onClick={(e) => {
          if (!isTargetNav(e.target)) handleExpandClick();
        }}
      >
        <CardActionArea>
          <StyledCardHeader title={name} subheader={dates} />
          {
            /* If included, use position as inner content */
            position
            && (
              <Typography paragraph style={styles.innerContent}>
                {position}
              </Typography>
            )
          }
          {
            /* If there is a description, include in an expandable area */
            description
            && (
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={styles.innerContent}>
                  {descriptionElem}
                  {
                    /* If there is a link, keep within the expandable area below the text */
                    linkUrl
                    && (linkWrapper(linkUrl, 'Check it out!'))
                  }
                </CardContent>
              </Collapse>
            )
          }
        </CardActionArea>
      </Card>
      <br />
    </div>
  ));
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  dates: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  linkUrl: PropTypes.string,
};

Project.defaultProps = {
  dates: null,
  position: null,
  description: null,
  linkUrl: null,
};

export default Project;
