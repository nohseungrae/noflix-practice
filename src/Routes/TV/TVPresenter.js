import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section
          title="상위 랭크"
          children={topRated.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="인기 방영작"
          children={popular.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        ></Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="현재 방영작"
          children={airingToday.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        ></Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
