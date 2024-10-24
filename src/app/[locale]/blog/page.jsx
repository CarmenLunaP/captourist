"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/globals.css";
import "../../../styles/blog.css";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const t = useTranslations("blog");
  const t1 = useTranslations("all_posts");

  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6); // Mostrar los primeros 6 posts
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/data/blogs/en.json'); // Cambia a 'es.json' si es necesario
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.all_posts.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisiblePosts(showMore ? 6 : posts.length); // Si está en mostrar más, se muestran todos
  };

  return (
    <div>
      <main className="blog-container">
        {/* Blog Section */}
        <section className="blog-section">
          <div className="blog-description">
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            {/* Botón con estilo y link */}
            <button
              className="btn1"
              onClick={() => (window.location.href = "/all_posts")}
            >
              {t("button-1")} <FaArrowRight />
            </button>
          </div>

          <div className="blog-image-links">
            <div className="blog-image-container">
              <Link href="/destination/venecia" className="image-link">
                <Image
                  src="/img/Venecia-800-600x383.jpg"
                  alt="Venecia"
                  width={377}
                  height={490}
                  className="Imgen-blog"
                />
                <p className="image-title">Venecia</p>{" "}
              </Link>
            </div>

            <div className="blog-image-container">
              <Link href="/destination/trocadero">
                <Image
                  src="/img/sesion-trocadero-1024x655.jpg"
                  alt="Trocadero"
                  width={377}
                  height={490}
                  className="Imgen-blog"
                />
                <p className="image-title">Trocadero</p>{" "}
              </Link>
            </div>
          </div>
        </section>


        {/* Second Section */}
         <section className="book-section">
           <div className="book-section-left">
           <h3>{t("handmadeMurderTitle")}</h3>
                      <p>{t("handmadeMurderDescription")}</p>
         {/* Segundo botón con estilo */}
          <button
            className="btn2"
            onClick={() => (window.location.href = "/book/handmade-murder")}
          >
            {t("button-2")}
          </button>
          </div>
          <div className="book-image-container">
            <Image
              src="/img/tu-ciudad.jpg"
              alt="Handmade Murder"
              width={320}
              height={360}
              // layout="responsive"
              // objectFit="cover"
            />
          </div>
        </section>

        {/* Nueva sección de artículos basada en la imagen */}
         <section className="articles-section">
         <div className="newsletter">
           <h2>{t("Secion3-title")}</h2>
           <input
              type="email"
              placeholder={t("placeholder")}
              className="newsletter-input"
            />
            <button className="submit-button">{t("buton-3")}</button>
          </div>
          </section>

        {/* Nueva sección de artículos basada en la imagen */}
        <section className="articles-section">
          {/* <h2>{t1("title")}</h2> */}
          <div className="articles-grid">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <div className="article" key={index}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="article-image"
                />
                <p className="article-date">{post.fecha}</p>
                <h3 className="article-title">{post.title}</h3>
                <p className="article-category">Inspiration</p>
              </div>
            ))}
          </div>
          {/* Botón para mostrar más posts */}
          <div className="show-more">
            <button className="submit-button" onClick={handleShowMore}>
              {showMore ? "Mostrar menos" : "Mostrar más"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}


// "use client"; 

// import Image from "next/image";
// import Link from "next/link";
// import "../../../styles/globals.css";
// import "../../../styles/blog.css";
// import { useTranslations } from "next-intl";
// import { FaArrowRight } from "react-icons/fa";

// export default function Blog() {
//   const t = useTranslations("blog");

//   return (
//     <div>
//       <main className="blog-container">
//         {/* Blog Section */}
//         <section className="blog-section">
//           <div className="blog-description">
//             <h1>{t("title")}</h1>
//             <p>{t("description")}</p>
//             {/* Botón con estilo y link */}
//             <button
//               className="btn1"
//               onClick={() => (window.location.href = "/all_posts")}
//             >
//               {t("button-1")} <a><FaArrowRight /></a>
//             </button>
//           </div>


//           <div className="blog-image-links">
//             <div className="blog-image-container">
//               <Link href="/destination/venecia" className="image-link">
//                 <Image
//                   src="/img/Venecia-800-600x383.jpg"
//                   alt="Venecia"
//                   width={377}
//                   height={490}
//                   // layout="responsive"
//                   // objectFit="cover"
//                   className="Imgen-blog"
//                 />
//                 <p className="image-title">Venecia</p>{" "}
               
//               </Link>
//             </div>

//             <div className="blog-image-container">
//               <Link href="/destination/trocadero">
//                 <Image
//                   src="/img/sesion-trocadero-1024x655.jpg"
//                   alt="Trocadero"
//                   width={377}
//                   height={490}
//                   // layout="responsive"
//                   // objectFit="cover"
//                   className="Imgen-blog"
//                 />
//                 <p className="image-title">Trocadero</p>{" "}
                
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Second Section */}
//         <section className="book-section">
//           <div className="book-section-left">
//           <h3>{t("handmadeMurderTitle")}</h3>
//           <p>{t("handmadeMurderDescription")}</p>
//           {/* Segundo botón con estilo */}
//           <button
//             className="btn2"
//             onClick={() => (window.location.href = "/book/handmade-murder")}
//           >
//             {t("button-2")}
//           </button>
//           </div>
//           <div className="book-image-container">
//             <Image
//               src="/img/tu-ciudad.jpg"
//               alt="Handmade Murder"
//               width={320}
//               height={360}
//               // layout="responsive"
//               // objectFit="cover"
//             />
//           </div>
//         </section>

//          {/* Nueva sección de artículos basada en la imagen */}
//          <section className="articles-section">
//           <div className="newsletter">
//             <h2>{t("Secion3-title")}</h2>
//             <input
//               type="email"
//               placeholder={t("placeholder")}
//               className="newsletter-input"
//             />
//             <button className="submit-button">{t("buton-3")}</button>
//           </div>

//                {/* posts */}

//           <div className="articles-grid">
//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="MBTI Travel Match Adventurers"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">26 SEP 2024</p>
//               <h3 className="article-title">Find Your MBTI Travel Match: Top Destinations for Adventurers!</h3>
//               <p className="article-category">Inspiration</p>
//             </div>

//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="MBTI Travel Match Guardians"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">07 AUG 2024</p>
//               <h3 className="article-title">Find Your MBTI Travel Match: Top Destinations for Guardians!</h3>
//               <p className="article-category">Inspiration</p>
//             </div>

//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="MBTI Escape"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">24 JUL 2024</p>
//               <h3 className="article-title">Sweet MBTI Escape: Travel Like Diplomats!</h3>
//               <p className="article-category">Inspiration</p>
//             </div>

//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="Unlocking MBTI Magic"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">18 JUL 2024</p>
//               <h3 className="article-title">Unlocking MBTI Magic: Unveiling Personality Types and Their Dream City Match</h3>
//               <p className="article-category">Inspiration</p>
//             </div>

//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="Summer Flicks"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">26 JUN 2024</p>
//               <h3 className="article-title">A Summer Flick to Remember With These Shows!</h3>
//               <p className="article-category">Inspiration</p>
//             </div>

//             <div className="article">
//               <Image
//                 src="/img/tu-ciudad.jpg"
//                 alt="Diversity on Juneteenth"
//                 width={300}
//                 height={200}
//                 className="article-image"
//               />
//               <p className="article-date">19 JUN 2024</p>
//               <h3 className="article-title">Diversity on Juneteenth!</h3>
//               <p className="article-category">Inspiration</p>
//             </div>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }

