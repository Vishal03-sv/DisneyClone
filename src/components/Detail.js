import React from 'react'
import styled from 'styled-components'
import { useApi } from '../context/MovieContext'
import { useParams } from 'react-router'

const Detail = () => {
    const { getById } = useApi()
    const {id} = useParams()
    const movie = getById(id)
    console.log(movie)

  return (
    <Container>
        <Background>
            <img src={movie.imageurl}/>
        </Background>
        <ImageTitle>
            <h1>{movie.title}</h1>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/Dimages/play-icon-black.png"/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/Dimages/play-icon-white.png"/>
                <span>TRAILER</span>
            </TrailerButton>
            <Addbutton>
                <span>+</span>
            </Addbutton>
            <GroupWatchButton>
                <img src="/Dimages/group-icon.png"/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            {movie.released} • {movie?.genre.map((item) => <span>{item}  </span>)}
        </SubTitle>
        <Description>
            {movie.synopsis}
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: reletive;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.2;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    /* height: 30vh; */
    width: 70vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
       background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

`

const Addbutton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px soild white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(Addbutton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
`