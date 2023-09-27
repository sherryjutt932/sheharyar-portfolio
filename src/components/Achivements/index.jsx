
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Tiles from './Tiles.jsx';
import Descriptions from './Descriptions.jsx';

const data = [
    {
        title: "Google",
        title2: "#HashCode",
        description: "Got certificate for achieving high point during hash code coding competition 2022.",
        img:"Google-HashCode.jpg",
        speed: 0.5
    },
    {
        title: "PSEB",
        title2: "MERN Stack",
        description: "Advanced MERN Stack course, endorsed by Pakistan Software Export Board (PSEB).",
        img:"PSEB-MERN.jpeg",
        speed: 0.5
    },
    {
        title: "G Secretory",
        title2: "Programming Buddies",
        description: "Got the chance to become general secretory of a coding society in my university.",
        img:"programming-buddies.jpg",
        speed: 0.67
    },
    {
        title: "Coursera",
        title2: "AWS Cloud",
        description: "AWS Cloud Solutions Architect certification which contains 4 module from Coursera.",
        img:"AWS.jpeg",
        speed: 0.8
    },
    {
        title: "Graphic",
        title2: "Designing Course",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        img:"graphic.png",
        speed: 0.8
    },
    
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Tiles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}