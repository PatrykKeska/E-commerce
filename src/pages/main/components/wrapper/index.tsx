import React from 'react';
import './styles.scss';
import { Title } from '../title';

export class Wrapper extends React.Component {
  render() {
    return (
      <section className="main-wrapper">
        this is main section
        <Title content="This is tittle" />
      </section>
    );
  }
}
