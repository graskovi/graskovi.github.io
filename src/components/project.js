import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Card, CardActionArea, CardActions, CardContent, CardHeader,
         CardMedia, Collapse, IconButton, Typography, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    height: 100,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const Project = ({name, description, img, linkUrl}) => {
  //const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <CardActionArea>
        {
          linkUrl ?
          <a href={linkUrl} target="_blank">
          <CardHeader title={name} />
          </a>
          :
          <CardHeader title={name} />
        }
        {
          img &&
          <CardMedia
            style={{height: 100}}
            image={img}
          />
        }
        {
          description &&
          <div>
            <CardActions disableSpacing>
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show description"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {description}
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        }
      </CardActionArea>
    </Card>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.object,
  linkUrl: PropTypes.string,
}

export default Project
