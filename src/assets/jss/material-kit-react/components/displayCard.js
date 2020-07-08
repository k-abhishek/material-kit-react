const displayCard = {
  displayCardRoot:{
    marginTop: 60,
    color: "rgba(0, 0, 0, 0.87)",
    width: "100%",
    border: 0,
    display: "flex",
    position: "relative",
    fontSize: ".875rem",
    minWidth: 0,
    wordWrap: "break-word",
    background: "#FFF",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    borderRadius: 6,
    marginBottom: 30,
    flexDirection: "column"
  },
  displayCardImageContainer: {
    padding: 0,
    zIndex: 1,
    position: "relative",
    marginTop: -30,
    marginLeft: 15,
    marginRight: 15,
    border: 0,
    marginBottom: 0
  },
  displayCardImageBackdrop: {
    top: 12,
    width: 100,
    filter: "blur(12px)",
    height: "100%",
    opacity: 0,
    zIndex: -1,
    position: "absolute",
    transform: "scale(0.94)",
    transition: "opacity .45s",
    backgroundSize: "cover"
  },
  displayCardBodyContent: {
      flex: "1 1 auto",
      padding: "0.9375rem 1.875rem",
      webkitBoxFlex: 1
  },
  displayCardBadgeInfo: {
    color: "#e91e63 !important",
    margin: "0 10px !important"
  },
  displayCardHeader: {
    color: "#3C4858",
    marginTop: ".625rem",
    minHeight: "auto",
    fontFamily: "'Roboto Slab', 'Times New Roman'",
    fontWeight: 700,
    marginBottom: "0.75rem",
    textDecoration: "none"
  },
  displayCardDescription: {
    color: "#999",
    fontSize: 14,
    margin: "0 0 10px"
  }
};

export default displayCard;
