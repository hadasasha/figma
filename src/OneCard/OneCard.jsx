
import { data } from '../../data'
import styles from './style.module.css'
import React from 'react'
import { useNavigate } from "react-router-dom";



export default function OneCard() {
  const item =  {
    title: "The Importance of Physical Fitness",
    subTitle: "Nurturing a healthy body and mind",
    author: {
      name: "David Thompson",
      title: "Fitness Trainer"
    },
    date: "October 18, 2024",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue sem id libero elementum, in tincidunt nunc ultrices. Fusce quis orci ac nunc gravida tincidunt at non nulla. Nulla sagittis iaculis arcu a congue. Mauris mattis tellus id libero placerat, et auctor tortor tempor. Nulla venenatis cursus aliquam. Ut sit amet lacinia justo. Curabitur scelerisque, orci at mattis ullamcorper, justo dolor vulputate turpis, eu finibus enim justo vitae elit. Donec accumsan tellus a turpis ullamcorper luctus. Sed et commodo nulla. Aliquam id pharetra purus, ut finibus est.",
    img: "https://www.idosport.co.il/wp-content/uploads/2021/05/%D7%9B%D7%95%D7%A9%D7%A8-%D7%92%D7%95%D7%A4%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%A8%D7%99%D7%A6%D7%94.jpg",
    category: "Fitness"
  }
//   const navigate=useNavigate()

    return (
    <div className={styles.card} >
    // onClick={()=>navigate('')}
        <span className={styles.category}>{item.category}</span>
        <img src={item.img}/>
        <span className={styles.date}>{item.date}</span>
        <h2>{item.title}</h2>
        <p>{item.subTitle}</p>
    </div>
    
  )
}
