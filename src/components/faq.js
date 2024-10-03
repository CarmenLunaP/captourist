"use client"; 

import { useState } from 'react';
import { useTranslations } from 'next-intl'; 
import "../styles/faq.css"
import { PiPlusCircleFill } from "react-icons/pi";
import Link from 'next/link';


export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const t = useTranslations("FrequentlyAskedQuestions"); 

  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    FrequentlyAskedQuestions: {
      "question-1": t("question-1"),
      "answer-1": t("answer-1"),
      "question-2": t("question-2"),
      "answer-2": t("answer-2"),
      "question-3": t("question-3"),
      "answer-3": t("answer-3"),
      "question-4": t("question-4"),
      "answer-4": t("answer-4"),
      "question-5": t("question-5"),
      "answer-5": t("answer-5"),
      "question-6": t("question-6"),
      "answer-6": t("answer-6"),
    }
  };

  return (
    <div className="faq-container">
        <h2 className="faq-title">{t("faqtitle")}</h2>
      {Object.keys(faqData.FrequentlyAskedQuestions).filter((key) => key.startsWith("question")).map((key, index) => (
        <div key={key} className="faq-card">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span>{faqData.FrequentlyAskedQuestions[key]}</span>
            {/* <span className="toggle-button">+</span> */}
            <span className="toggle-button"><PiPlusCircleFill /></span>
            
          </div>
          {openQuestion === index && (
            <div className="faq-answer">
              {faqData.FrequentlyAskedQuestions[`answer-${index + 1}`]}
            </div>
          )}
        </div>
      ))}

   </div>
  );
}
