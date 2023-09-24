
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Tiles from './Tiles.jsx';
import Descriptions from './Descriptions.jsx';

const data = [
    {
        title: "Google",
        title2: "#HashCode",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "PSEB",
        title2: "MERN Stack",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "General Secretory",
        title2: "Programming Buddies",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Coursera",
        title2: "AWS Cloud",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "Graphic",
        title2: "Designing Course",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
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