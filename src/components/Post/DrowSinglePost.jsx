import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditPostDialog from './EditPost'
import DeleteIcon from '@mui/icons-material/Delete';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PostCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [favoriteColor, setFavoriteColor] = React.useState("default")

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleFavoriteClick = () => {
        if (favoriteColor == "default") {
            setFavoriteColor("error");
            setCntFavorite(cntFavorite + 1)
        }
        else {
            setFavoriteColor("default")
            setCntFavorite(cntFavorite - 1)
        }
    };
    const [cntFavorite, setCntFavorite] = React.useState(0)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <IconButton aria-label="favorite" color={favoriteColor} onClick={handleFavoriteClick}>
                <FavoriteIcon /> </IconButton>
            {cntFavorite}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    some text
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        more text
                    </Typography>
                </CardContent>
            </Collapse>
            <CardActions disableSpacing>
                <IconButton aria-label="delete a post">
                    <DeleteIcon />
                </IconButton>
                <EditPostDialog/>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>



        </Card>
    );
}