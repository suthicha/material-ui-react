import React from  'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function Header(props) {
    return (
        <ElevationScroll>
            <AppBar position="fixed" color="primary">
                <ToolBar>
                  <Typography variant="h3">
                    AekeLab Development
                  </Typography>
                </ToolBar>
            </AppBar>
        </ElevationScroll>
    );
};