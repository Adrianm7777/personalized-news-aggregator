"use client";
import { useState, useEffect } from "react";

interface IArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  published_date: string;
}

const Page = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/article/");
        const data: IArticle[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">News Feed</h1>
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white shadow-md rounded-lg p-6 mb-4"
        >
          <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-4">Category: {article.category}</p>
          <p className="text-gray-800">{article.content}</p>
          <p className="text-gray-500 text-sm mt-2">
            Published on:{" "}
            {new Date(article.published_date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;
