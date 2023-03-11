import { Story } from "./Story";
import React, { useEffect, useState } from "react";
import './Stories.css'

export const Stories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
        .then((response) => response.json())
        .then((data) => setStoryIds(data.slice(0,10)))
    }, []);

    return (
        <ol>
            {storyIds.map(id => <Story id={id}/>)}
        </ol>
    )
}