import React from 'react';
import { createStyles, makeStyles, Theme ,withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import RouterLink from './RouterLink'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    rootList: {
      width: '100%',
      maxWidth: 150,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);



const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IAppProps {
  SetDialog: boolean
  handleClose: (arg0: boolean) => void
  User: Array<string>
}

export default function FullScreenDialog(Props: IAppProps) {
  const classes = useStyles();
  console.log(Props.SetDialog)
  // const handleClickOpen = () => {
  // };

  const handleClose = () => {
    Props.handleClose(Props.SetDialog)
  };



  return (
    <div>
      <Dialog fullScreen open={Props.SetDialog} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{ textAlign: 'center', marginLeft: '40px' }}>
              user: {Props.User[0]}
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              some thing else PH
            </Button>
          </Toolbar>
        </AppBar>
        <div>

          <List
            className={classes.rootList}
            component="nav"
          >
            {/* <CustomeListItem button component={RouterLink} >
              <ListItemText primary="some PH" />
            </CustomeListItem> */}
            <RouterLink
            to='/devices'
            primary='devices'
            />
          </List>
        </div>
      </Dialog>
    </div>
  );
}
