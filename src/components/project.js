import React from "react"
import PropTypes from "prop-types"
import { Card, CardActionArea, CardActions, CardContent, CardHeader,
         Collapse, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  link: {
    color: "black",
    textDecoration: "none",
  },
  table: {
    width: "100%",
    margin: "1em"
  },
  name: {
    textAlign: "left"
  },
  rowEnd: {
    align: "right",
    textAlign: "right"
  }
}

const Project = ({name, dates, position, description, linkUrl}) => {
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
       <Card>
        <CardActionArea>
          <table style={styles.table}>
            <tr>
              <td>
              {
                linkUrl ?
                (linkUrl.startsWith("http")
                ?
                <a href={linkUrl} style={styles.link} target="_blank" rel="noopener noreferrer">
                  <CardHeader title={name} subheader={dates} />
                </a>
                :
                <a href={linkUrl} style={styles.link}>
                  <CardHeader title={name} subheader={dates} />
                </a>
                )
                : <CardHeader title={name} subheader={dates} />
              }
              </td>
              {
                description &&
                <td style={styles.rowEnd}>
                  <CardActions disableSpacing>
                    <IconButton
                      styles={{ rotate: '100deg' }}
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
            <Typography paragraph style={{marginLeft: "2em"}}>
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
  dates: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  linkUrl: PropTypes.string,
}

export default Project;
