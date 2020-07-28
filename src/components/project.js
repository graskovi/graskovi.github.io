import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Card, CardActionArea, CardContent, CardHeader, Collapse, Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  table: {
    width: '100%',
    margin: '1em',
  },
  name: {
    textAlign: 'left',
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

const linkFromUrl = (linkUrl, linkText) => {
  if (isLinkExternal(linkUrl)) {
    return <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>;;
  }
  return <Link to={linkUrl}>{linkText}</Link>;
};

const linkWrapper = (linkUrl, project) => {
  if (isLinkExternal(linkUrl)) {
    return <a href={linkUrl} target="_blank" rel="noopener noreferrer">{project}</a>;
  }
  return <Link to={linkUrl}>{project}</Link>;
};

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

  const titleElem = <StyledCardHeader title={name} subheader={dates} />;

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
        onClick={handleExpandClick}
      >
        <CardActionArea>
          <table style={styles.table}>
            <tr>
              <td>
                {titleElem}
              </td>
            </tr>
          </table>
          {
            position
            && (
              <Typography paragraph style={{ marginLeft: '2em' }}>
                {position}
              </Typography>
            )
          }
          {
            description
            && (
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {descriptionElem}
                  {
                    linkUrl
                    && (linkFromUrl(linkUrl, 'Check it out!'))
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
