import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  Card, CardActionArea, CardContent, CardHeader, Collapse, Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const styles = {
  innerContent: {
    marginLeft: '1.5em',
    marginRight: '1.5em',
  },
  name: {
    marginLeft: '0.5em',
    marginRight: '0.5em',
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
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

const linkWrapper = (linkUrl, children = null) => {
  const content = (children == null) ? <OpenInNewIcon /> : children;
  if (isLinkExternal(linkUrl)) {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
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
  // Handle state of switching between project description being expanded or not
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  // Create a description element for a single string or array of strings
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
          console.log(e.target);
          // Only handle the click if a link is not clicked
          if (!isTargetNav(e.target)) handleExpandClick();
        }}
      >
        <CardActionArea>
          <StyledCardHeader title={name} subheader={dates} style={styles.name} />
          <div style={styles.innerContent}>
            <div style={styles.rowStyle}>
              {
                /* If included, use position as inner content */
                position
                && (
                  <Typography paragraph>
                    {position}
                  </Typography>
                )
              }
              {
                description && (
                  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
                )
              }
            </div>
            {
              /* If there is a description, include in an expandable area */
              description
              && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    {descriptionElem}
                    {
                      /* If there is a link, keep within the expandable area below the text */
                      linkUrl
                      && (linkWrapper(linkUrl))
                    }
                  </CardContent>
                </Collapse>
              )
            }
          </div>
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
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  linkUrl: PropTypes.string,
};

Project.defaultProps = {
  dates: null,
  position: null,
  description: null,
  linkUrl: null,
};

export default Project;
