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
  linkStyle: {
    textDecoration: 'none',
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

// TODO move some of these helper functions to utilities file
const isLinkInternal = (linkUrl) => linkUrl.startsWith('/');

const isLinkExternal = (linkUrl) => linkUrl.toLowerCase().startsWith('http');

const internalLinkWrapper = (linkUrl, content) => (
  <Link to={linkUrl} style={styles.linkStyle}>
    {content}
  </Link>
);

const externalLinkWrapper = (linkUrl, content) => (
  <a href={linkUrl} style={styles.linkStyle} target="_blank" rel="noopener noreferrer">
    {content}
  </a>
);

const linkWrapper = (linkUrl, child = null) => {
  const content = (isLinkExternal(linkUrl))
    ? (
      <div style={styles.rowStyle}>
        <div style={{ marginRight: '0.5em' }}>{child}</div>
        <OpenInNewIcon />
      </div>
    )
    : child;

  if (isLinkInternal(linkUrl)) {
    return internalLinkWrapper(linkUrl, content);
  }

  return externalLinkWrapper(linkUrl, content);
};

const isTargetNav = (target) => {
  let curr = target;
  while (curr) {
    if (curr.tagName === 'A') return true;
    curr = curr.parentNode;
  }
  return false;
};

// TODO edit this to not rely on linkWrapper and properly handle cases
const projectNavWrapper = (linkUrl, description, project) => {
  if (linkUrl && !description) {
    if (isLinkInternal(linkUrl)) {
      return internalLinkWrapper(linkUrl, project);
    }
    return externalLinkWrapper(linkUrl, project);
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

  // Create navigation icon if entire project is clickable
  let navIcon = null;
  if (linkUrl && !description) {
    if (isLinkInternal(linkUrl)) navIcon = <LinkIcon />;
    else navIcon = <OpenInNewIcon />;
  }

  return projectNavWrapper(linkUrl, description, (
    <div>
      <Card
        onClick={(e) => {
          // Only handle the click if a link is not clicked
          if (!isTargetNav(e.target)) handleExpandClick();
        }}
      >
        <CardActionArea>
          {/* TODO make this header a row with a link if there is no description */}
          <div style={{ ...styles.rowStyle, alignItems: 'center' }}>
            <StyledCardHeader title={name} subheader={dates} style={styles.name} />
            { navIcon }
          </div>
          <div style={styles.innerContent}>
            <div style={styles.rowStyle}>
              {
                // If included, use position as inner content
                position && (
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
              // If there is a description, include in an expandable area
              description && (
                <div style={{ paddingTop: '0.5em' }}>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      {descriptionElem}
                      {
                        // If there is a link, keep within the expandable area below the text
                        linkUrl
                        && (
                          <div style={{ paddingTop: '1em' }}>
                            {linkWrapper(linkUrl, name)}
                          </div>
                        )
                      }
                    </CardContent>
                  </Collapse>
                </div>
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
