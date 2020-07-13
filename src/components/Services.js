import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Titles';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto!',
      },
      {
        icon: <FaHiking />,
        title: 'Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto!',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto!',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
