import React from "react";
import img from "./image/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import "./Sports.css";

export default function Sports () {
  const image_list = [
    ["top news", "https://source.unsplash.com/1080x400/?top,news"],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?top,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?celebrity,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?stocks,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?economy,news",
    ],
  ];
  return (
    <>
      <div className="logo">
        <img src={ img } alt=" " />
      </div>
      <hr />
      <div className="header">
        <Avatar className="back_arrow">
          <ArrowBackIosSharpIcon />
        </Avatar>
        <h2>Sports</h2>
      </div>
      <div className="busy_content">
        <div className="top_image">
          <img src={ image_list[0][1] } alt="" />
          <div className="top_text">
            <h4>{ image_list[0][0] }</h4>
          </div>
        </div>
        <div className="images">
          { image_list.slice(1).map((text) => {
            return (
              <div className="image">
                <div className="bg_image">
                  <img src={ text[1] } alt="" />
                  <div className="text">
                    <h4>{ text[0] }</h4>
                  </div>
                </div>
              </div>
            );
          }) }
        </div>
      </div>
      <div className="bottom_banner">
          <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="left_img" />
        <div className="right_text">
          <h2>How tech-enabled learning is the future of education</h2>
        </div>
        <div classname="bottom_txt">
          <p>The pandemic has proved that education and technology can and must be interwoven for a better reach, including to students in remote areas.
            “Technology and education can work in sync with each other to enable inclusion in classrooms,” says Anuradha Sridhar, head-curriculum development and training, Aditya Birla Education Academy, Mumbai.
            “Some learners learn well when technology is embedded. With the advent of virtual reality, abstract concepts in biology and physics have become visual for students to be able to understand concepts better."
            Simulations, computer-aided learning and robotics have made learning hands-on for students.</p>
        </div>
      </div>
    </>
  );
}
