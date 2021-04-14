import styled from 'styled-components';
import colors from '../../../assets/colors';

const widthImage = 114;
const heightImage = 161.36;

export const Container = styled.div`
    margin: 0 10px 10px 0;
    width: ${widthImage}px;
    position: relative;
    & > div:nth-child(1) {
        height: ${heightImage}px;
        width: ${widthImage}px;
        overflow: hidden;
        a{
            height: ${heightImage}px;
            width: ${widthImage}px;
            overflow: hidden;
        }
        img {
            width: 100%;
            height: 100%;
            transition: .3s;
            cursor: pointer;
            position: relative;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    & > p{
        margin-top: 2px;
        font-size: 0.85rem; //14px
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
        max-width: ${heightImage}px;
    }
    & .anime-footer {
        display: flex;
        justify-content: space-between;
        span{
            display: flex;
            align-items: center;
            font-size: 0.75rem; //12px
            color: ${colors.grey};
        }
    }
`;
