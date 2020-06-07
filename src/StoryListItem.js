import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const mapStructure = (stories) => {
  if (stories) {
    return stories.map(story => (
      <ListItem alignItems="flex-start" key={story.data.url}>
        <ListItemText
          primary={story.data.title}
          secondary={
            <React.Fragment>
            <a href={story.data.url} target="_blank">
            {story.data.url}
              </a>
					{story.data.score} points by {story.data.by}
            
            </React.Fragment>
          }
        />
      </ListItem>
    ));
  }
};


const StoryListItem = ({stories}) =>  {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {mapStructure(stories)}
      <Divider variant="inset" component="li" />
    
    </List>
  );
}


export default StoryListItem;