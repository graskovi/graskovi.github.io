import React, { useState } from "react"
import PropTypes from "prop-types"
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

const Project = ({name, position, description, img, linkUrl}) => {
  //const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
      <Card>
        <CardActionArea>
          <table style={{width: "100%", margin: "1em"}}>
            <tr>
              <td>
              {
                linkUrl ?
                <a href={linkUrl} target="_blank">
                <CardHeader title={name} />
                </a>
                :
                <CardHeader title={name} />
              }
              </td>
              {
                description &&
                <td>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Show description"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                </td>
              }
            </tr>
          </table>
          {
            position &&
            <Typography paragraph style={{marginLeft: "1em"}}>
              {position}
            </Typography>
          }
          {
            description &&
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {description}
                </Typography>
              </CardContent>
            </Collapse>
          }
        </CardActionArea>
      </Card>
      <br />
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.object,
  linkUrl: PropTypes.string,
}

export default Project
