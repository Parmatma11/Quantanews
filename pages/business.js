import Navbar from '@/components/Navbar';
import React from 'react';


const newsData = [
  {
    title: '',
    description: '',
    imageUrl: 'image1-url', // Replace with actual image URL
    link: '/news1', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  {
    title: '',
    description: '',
    imageUrl: 'image2-url', // Replace with actual image URL
    link: '/news2', // Replace with actual link
  },
  
];

export default function NewsGrid() {
  return (
    <div style={styles.container}>
      <Navbar/>
      <h2 style={styles.header}>Searched: India</h2>
      <div style={styles.gridContainer}>
        {newsData.map((news, index) => (
          <a href={news.link} key={index} style={styles.cardLink}>
            <div style={styles.card}>
              <img src={news.imageUrl} alt={news.title} style={styles.image} />
              <h3 style={styles.title}>{news.title}</h3>
              <p style={styles.description}>{news.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
  },
  description: {
    fontSize: '14px',
    padding: '0 10px 10px 10px',
    color: '#555',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
};

