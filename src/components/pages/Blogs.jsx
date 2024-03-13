import React, { useEffect, useState } from "react";
import Layout from '../Layout'
import Carousel from 'react-material-ui-carousel';
import Typography from '@mui/material/Typography';
import music from '../../img/Music.jpg'
import books from '../../img/books.webp'
import sweets from '../../img/sweets.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Blogs() {
    const [coffee, setCoffee]= useState([
        { 
            id: 1, 
            title: 'Sweets for coffee', 
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: sweets 
        },
        { 
            id: 2, 
            title: 'Books for coffee', 
            description:'Six books to read while drinking your afternoon  or coffee',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: books 
        },
        { 
            id: 3, 
            title: 'Music for coffee', 
            description:'Morning Relaxing Music - Coffee Music and Sunshine - The most beautiful love song in the world',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: music 
        }
    ])
    const [articles, setArticles] = useState([
        { 
            id: 1, 
            title: 'Sweets for coffee', 
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: sweets 
        },
        { 
            id: 2, 
            title: 'Books for coffee', 
            description:'Six books to read while drinking your afternoon  or coffee',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: books 
        },
        { 
            id: 3, 
            title: 'Music for coffee', 
            description:'Morning Relaxing Music - Coffee Music and Sunshine - The most beautiful love song in the world',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: music 
        }
    ]);

    return (
        <Layout>
            <div className="blogs">
                <div className='movie-carousel-container'>
                    <Carousel>
                        {articles.map((article) => {
                            return(
                                <div key={article.title} className='movie-card-container'>
                                    <div className="movie-card" style={{ 
                                        backgroundImage: `url(${article.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover', 
                                        height:'50rem'
                                    }}>
                                        <div className="movie-detail">
                                            <div className="text2" >
                                                <h1 className='titleBg'>{article.title}</h1>
                                                <Typography
                                                    className="description"
                                                    variant="body1"
                                                >
                                                    {article.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
        </Layout>
    );
}

export default Blogs;
