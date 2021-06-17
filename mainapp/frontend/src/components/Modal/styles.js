
const styles = theme => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width:'350px',
    outline: 'none',
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '5vh'
  },
  itemTitle: {
    color: theme.color.textColor,
    fontWeight: 500,
    fontSize: '0.8em',
    textTransform: 'capitalize',
  },
  icon: {
    cursor: 'pointer',
  },
  content: {
    minWidth: '100%',
    marginLeft: '1px',
    marginRight: '1px',
  },
});
  
  export default styles;
