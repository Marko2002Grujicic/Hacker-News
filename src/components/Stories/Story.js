import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Story.css'

export const Story = ({id}) => {
    const [story, setStories] = useState([]);

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
            setStories(data)
        })
    }, [id]);
    
    const time = story.time;
    const date = new Date(time * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const groupedDate = `${day}/${month}/${year}`;
    const comments = story.kids ? story.kids.length : 0;
    const url = story.url ? story.url : `https://news.ycombinator.com/item?id=${story.id}`

    return (
        <li key={story.id}>
            <div className='link'><a href={url}>{story.title}</a></div>
            <br/>
            <span id="score"><FontAwesomeIcon icon={faHeart} className="icon"/> <span id="text">{story.score}points</span></span>
            <span id="author"><FontAwesomeIcon icon={faUser} className="icon"/> {story.by}</span>
            <span id="date"><FontAwesomeIcon icon={faClock} className="icon"/> {groupedDate}</span>
            <span id="comments">{comments} comments</span>
            <hr/>
        </li>
    )
};
