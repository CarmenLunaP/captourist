"use client"; 
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import "../../../styles/allposts.css";

export default function AllPosts() {
    const t = useTranslations("all_posts");
    const [posts, setPosts] = useState([]);

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

    return (
        <div>
            <main className="all-posts-container">
                <section>
                    <h1>{t("title")}</h1>
                    <p>{t("description")}</p>
                </section>
                <section>
                    {posts.map((post) => (
                        <article key={post.id} className="post-card">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="post-image"
                            />
                            <h2>{post.title}</h2>
                            <h3>{post.fecha}</h3>

                            {/* Renderiza los párrafos adicionales directamente en el nivel del post */}
                            {post.paragraphs && post.paragraphs.map((paragraph, idx) => (
                                <p key={idx}>{paragraph.text}</p>
                            ))}

                            {/* Renderiza el contenido dinámico dentro de las secciones */}
                            {post.content && post.content.map((section, index) => (
                                <div key={index}>
                                    
                                    {section.subtitle && <h3>{section.subtitle}</h3>}
                                    {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
                                        <div key={idx} className="paragraph-container">
                                            {paragraph.text && <p>{paragraph.text}</p>}
                                            {paragraph.image && (
                                                <Image
                                                    src={paragraph.image}
                                                    alt={`Image for ${paragraph.text}`}
                                                    width={100} // Ajusta el tamaño según tus necesidades
                                                    height={100}
                                                    className="paragraph-image"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}


// "use client"; 
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { useEffect, useState } from "react";
// import "../../../styles/allposts.css";

// export default function AllPosts() {
//     const t = useTranslations("all_posts");
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         async function fetchPosts() {
//             try {
//                 const response = await fetch('/data/blogs/en.json'); // Cambia a 'es.json' si es necesario
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setPosts(data.all_posts.posts);
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         }

//         fetchPosts();
//     }, []);

//     return (
//         <div>
//             <main className="all-posts-container">
//                 <section>
//                     <h1>{t("title")}</h1>
//                     <p>{t("description")}</p>
//                 </section>
//                 <section>
//                     {posts.map((post) => (
//                         <article key={post.id} className="post-card">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 width={600}
//                                 height={400}
//                                 className="post-image"
//                             />
//                             <h2>{post.title}</h2>

//                             {/* Aquí estamos incluyendo el texto general del post */}
//                             {post.text && <p>{post.text}</p>}

//                             {/* Renderizamos el contenido dinámico de cada sección */}
//                             {post.content && post.content.map((section, index) => (
//                                 <div key={index}>
//                                     {section.subtitle && <h3>{section.subtitle}</h3>}
//                                     {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
//                                         <div key={idx} className="paragraph-container">
//                                             {paragraph.text && <p>{paragraph.text}</p>}
//                                             {paragraph.image && (
//                                                 <Image
//                                                     src={paragraph.image}
//                                                     alt={`Image for ${paragraph.text}`}
//                                                     width={100}
//                                                     height={100}
//                                                     className="paragraph-image"
//                                                 />
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </article>
//                     ))}
//                 </section>
//             </main>
//         </div>
//     );
// }



// "use client"; 
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { useEffect, useState } from "react";
// import "../../../styles/allposts.css";

// export default function AllPosts() {
//     const t = useTranslations("all_posts");
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         async function fetchPosts() {
//             try {
//                 const response = await fetch('/data/blogs/en.json'); // Cambia a 'es.json' si es necesario
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setPosts(data.all_posts.posts);
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         }

//         fetchPosts();
//     }, []);

//     return (
//         <div>
//             <main className="all-posts-container">
//                 <section>
//                     <h1>{t("title")}</h1>
//                     <p>{t("description")}</p>
//                 </section>
//                 <section>
//                     {posts.map((post) => (
//                         <article key={post.id} className="post-card">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 width={600}
//                                 height={400}
//                                 className="post-image"
//                             />
//                             <h2>{post.title}</h2>
//                             {post.content.map((section, index) => (
//                                 <div key={index}>
//                                     <h3>{section.subtitle}</h3>
//                                     {section.paragraphs.map((paragraph, idx) => (
//                                         <div key={idx} className="paragraph-container">
//                                             <p>{paragraph.text}</p>
//                                             {paragraph.image && (
//                                                 <Image
//                                                     src={paragraph.image}
//                                                     alt={`Image for ${paragraph.text}`}
//                                                     width={100} // Ajusta el tamaño según tus necesidades
//                                                     height={100}
//                                                     className="paragraph-image"
//                                                 />
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </article>
//                     ))}
//                 </section>
//             </main>
//         </div>
//     );
// }




// "use client"; 
// import Image from "next/image";
// import Link from "next/link";
// import "../../../styles/globals.css";

// import { useTranslations } from "next-intl";


// export default function AllPosts() {
//     const t = useTranslations("all_posts");
  
//     return (
//       <div>
//         <main className="all-posts-container">
//           <section>
//             <h1>{t("title")}</h1>
//             <p>{t("description")}</p>
//           </section>
//         </main>
//       </div>
//     );
//   }
  