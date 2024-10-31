"use client";
import { useState, useEffect } from "react";

interface IArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  published_date: string;
}
const Page = ({ id, title, content }: IArticle) => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/article/");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <div>
      <h1>News Feed</h1>
      {articles.map(() => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
