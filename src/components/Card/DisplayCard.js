import React from 'react';
import styles from "assets/jss/material-kit-react/components/badgeStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function DisplayCard(props) {
  const classes = useStyles();
  const { image, header, description, url, badge } = props;

  return (
    <div className={classes.displayCardRoot}>
      <div className={classes.displayCardImageContainer}>
        <a href={url || ''}>
          <img src={image} alt="..."/>
        </a>
        <div className={classes.displayCardImageBackdrop} style={{backgroundImage: `url(${image})`, opacity: 1}}></div>
      </div>
      <div className={classes.displayCardBodyContent}>
        <h6 className={classes.displayCardBadgeInfo}>{badge}</h6>
        <h4 className={classes.displayCardHeader}>
          <a href={url || ''}>{header}</a>
        </h4>
        <p className={classes.displayCardDescription}>{description}</p>
      </div>
    </div>
  );
}

DisplayCard.defaultProps = {
  image: require("assets/img/faces/card-profile1-square.jpg"),
  header: 'Learn how to wear your scarf with a floral print shirt',
  url: '#',
  badge: 'Trends',
  description: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
};
