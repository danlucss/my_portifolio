import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FaBars, FaClosedCaptioning, FaExchangeAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { VscClose } from 'react-icons/vsc';
import danAvatar from '../../assets/images/danlucss-photo.png';

import './index.scss';

import homeIcon from '../../assets/images/icons/home.svg';
import aboutIcon from '../../assets/images/icons/user.svg';

import portifolioIcon from '../../assets/images/icons/portfolio.svg';
import contactIcon from '../../assets/images/icons/contact.svg';



const Sidebar = () => {

    const [active, setMode] = useState(false);
    const [showNav, setShowNav] = useState(false);




    const ToggleMode = () => {
        setMode(!active);
    }


    return (

        <div className='nav-bar'>

            <Link to='/' className='logo'>
                <img src={danAvatar} alt="DanLucss" />
                {/* <img src={danAvatarNeon} alt="DanLucss neon" /> */}

                {/* <svg id='svg-logo' width="361" height="115" viewBox="0 0 361 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_112_21" maskUnits="userSpaceOnUse" x="0" y="0" width="361" height="115" fill="black">
                            <rect fill="white" width="361" height="115" />
                            <path d="M33.55 75.5C33.4667 75.5 32.8833 76.4167 31.8 78.25C30.8 80.0833 29.425 82.0833 27.675 84.25C25.925 86.4167 23.8417 88.4167 21.425 90.25C19.0917 92.0833 16.5917 93 13.925 93C10.2583 93 7.175 91.875 4.675 89.625C2.25833 87.375 1.05 84.2917 1.05 80.375C0.883333 78.375 1.13333 76 1.8 73.25C2.55 70.5 3.59167 67.6667 4.925 64.75C6.34167 61.75 8.00833 58.875 9.925 56.125C11.925 53.2917 14.05 50.875 16.3 48.875C18.55 46.7917 20.8833 45.25 23.3 44.25C25.8 43.25 28.3 43.0833 30.8 43.75V42C30.8 39.8333 30.7167 37.625 30.55 35.375C30.4667 33.0417 30.3417 30.4167 30.175 27.5C30.0917 24.5 29.9667 21.0833 29.8 17.25C29.7167 13.3333 29.675 8.66667 29.675 3.25C29.925 2.33333 30.3417 1.75 30.925 1.5C31.5917 1.16667 32.3 1 33.05 1C34.9667 1 36.4667 1.625 37.55 2.875C38.7167 4.125 39.425 5.66667 39.675 7.5C39.5083 10.3333 39.425 13.25 39.425 16.25C39.5083 19.1667 39.675 22.5 39.925 26.25C40.175 30 40.55 34.25 41.05 39C41.6333 43.75 42.3417 49.375 43.175 55.875C44.0083 62.2917 45.0083 69.7083 46.175 78.125C47.3417 86.4583 48.7167 96.125 50.3 107.125V111.375C50.3 111.875 50.0917 112.25 49.675 112.5C49.3417 112.75 48.8833 112.917 48.3 113C47.8 113.167 47.2583 113.25 46.675 113.25C46.175 113.333 45.8 113.375 45.55 113.375C44.3 113.375 42.9667 113 41.55 112.25C40.1333 111.583 39.3 110.625 39.05 109.375L34.425 76C34.425 75.75 34.3 75.625 34.05 75.625C33.8833 75.5417 33.7167 75.5 33.55 75.5ZM11.55 78.25C11.55 78.5 11.5083 78.9583 11.425 79.625C11.425 80.2083 11.425 80.8333 11.425 81.5C11.5083 82.1667 11.6333 82.75 11.8 83.25C11.9667 83.75 12.3 84 12.8 84C14.8833 84.0833 17.0083 83.2917 19.175 81.625C21.425 79.9583 23.4667 77.9167 25.3 75.5C27.1333 73 28.6333 70.3333 29.8 67.5C31.05 64.6667 31.7167 62.125 31.8 59.875C31.9667 57.625 31.425 55.9167 30.175 54.75C29.0083 53.5 26.9667 53.2083 24.05 53.875C20.4667 57.0417 17.4667 60.6667 15.05 64.75C12.7167 68.8333 11.55 73.3333 11.55 78.25Z" />
                            <path d="M82.8 60.375C82.05 61.7083 81.175 63.3333 80.175 65.25C79.2583 67.0833 78.2583 69.0833 77.175 71.25C76.0917 73.3333 74.8833 75.4583 73.55 77.625C72.3 79.7083 70.9667 81.625 69.55 83.375C68.2167 85.125 66.8 86.625 65.3 87.875C63.8 89.0417 62.2583 89.75 60.675 90C60.0083 90 59.2583 89.9583 58.425 89.875C57.5917 89.7083 56.7583 89.5 55.925 89.25C55.0917 88.9167 54.3833 88.5 53.8 88C53.3 87.4167 53.05 86.6667 53.05 85.75C53.1333 77.25 53.7583 69.5417 54.925 62.625C56.0917 55.625 57.925 49.5 60.425 44.25C62.925 38.9167 66.1333 34.5 70.05 31C73.9667 27.5 78.7167 25 84.3 23.5C84.4667 23.5 84.7583 23.5 85.175 23.5C85.675 23.4167 86.0083 23.375 86.175 23.375C88.675 23.2917 90.4667 24.4583 91.55 26.875C92.7167 29.2083 93.55 32.9583 94.05 38.125C94.6333 43.2083 95.0083 49.7917 95.175 57.875C95.425 65.875 95.8833 75.5 96.55 86.75C96.8 87.6667 96.925 88.4583 96.925 89.125C97.0083 89.7917 97.05 90.5833 97.05 91.5C97.05 92.75 96.675 93.7083 95.925 94.375C95.175 94.9583 94.2167 95.25 93.05 95.25C90.6333 95.25 88.925 94.5833 87.925 93.25C86.925 91.9167 86.2583 90.125 85.925 87.875C85.925 87.7917 85.8417 87.125 85.675 85.875C85.5917 84.625 85.425 83.2083 85.175 81.625C85.0083 79.9583 84.8417 78.2917 84.675 76.625C84.5083 74.9583 84.3833 73.5833 84.3 72.5V72C84.1333 71.1667 84.0083 70.125 83.925 68.875C83.925 67.625 83.8417 66.4167 83.675 65.25C83.5083 63.8333 83.3833 62.4167 83.3 61L82.8 60.375ZM80.05 35.625C77.8 37.2917 75.5917 39.5417 73.425 42.375C71.2583 45.2083 69.7167 47.9583 68.8 50.625C68.3833 51.875 67.925 53.5833 67.425 55.75C66.925 57.9167 66.4667 60.0833 66.05 62.25C65.7167 64.3333 65.425 66.2917 65.175 68.125C64.925 69.875 64.8 71 64.8 71.5C64.8833 71.5 64.9667 71.4167 65.05 71.25C65.2167 71.0833 65.3417 70.9583 65.425 70.875C70.5917 65.875 74.2167 60.5 76.3 54.75C78.4667 48.9167 79.7167 42.5417 80.05 35.625Z" />
                            <path d="M139.175 91C138.008 89.3333 137.008 87.0417 136.175 84.125C135.425 81.125 134.675 78 133.925 74.75C133.258 71.4167 132.633 68.2083 132.05 65.125C131.467 61.9583 130.842 59.4583 130.175 57.625C129.592 55.7083 128.925 54.625 128.175 54.375C127.425 54.125 126.55 55.25 125.55 57.75L114.675 91.25C114.258 92.4167 113.758 93.25 113.175 93.75C112.592 94.1667 111.633 94.375 110.3 94.375C109.633 94.375 108.925 94.2917 108.175 94.125C107.425 93.875 106.717 93.5417 106.05 93.125C105.383 92.7083 104.8 92.2083 104.3 91.625C103.883 91.0417 103.633 90.375 103.55 89.625C103.8 88.625 104.008 86.7917 104.175 84.125C104.425 81.4583 104.592 78.375 104.675 74.875C104.758 71.375 104.8 67.7083 104.8 63.875C104.883 59.9583 104.883 56.3333 104.8 53C104.8 49.5833 104.758 46.6667 104.675 44.25C104.592 41.75 104.508 40.125 104.425 39.375C104.425 38.5417 104.425 37.7083 104.425 36.875C104.508 35.9583 104.633 35.125 104.8 34.375C105.05 33.625 105.425 33.0417 105.925 32.625C106.508 32.125 107.383 31.875 108.55 31.875C110.133 31.875 111.592 32.5417 112.925 33.875C114.342 35.2083 115.05 36.625 115.05 38.125C115.05 40.2917 114.925 42.4583 114.675 44.625C114.508 46.7083 114.425 48.8333 114.425 51C114.425 52.3333 114.425 53.4583 114.425 54.375C114.425 55.2917 114.592 56.4167 114.925 57.75C115.175 57.0833 115.592 55.9167 116.175 54.25C116.758 52.5833 117.383 50.8333 118.05 49C118.8 47.1667 119.467 45.4583 120.05 43.875C120.633 42.2083 121.05 41.0417 121.3 40.375C121.883 38.7083 122.758 37.125 123.925 35.625C125.092 34.0417 126.633 33.1667 128.55 33C129.8 32.9167 130.925 33.25 131.925 34C133.008 34.75 133.925 35.75 134.675 37C135.425 38.1667 136.05 39.4167 136.55 40.75C137.05 42 137.425 43.0833 137.675 44L144.425 75.125L149.675 89.375C149.758 89.4583 149.8 89.7083 149.8 90.125C149.8 90.4583 149.8 90.7083 149.8 90.875C149.8 91.875 149.55 92.875 149.05 93.875C148.633 94.7917 147.842 95.25 146.675 95.25C145.258 95.25 143.8 94.875 142.3 94.125C140.8 93.2917 139.758 92.25 139.175 91Z" />
                            <path d="M156.3 86.5C156.3 83 156.383 79.5833 156.55 76.25C156.717 72.9167 156.8 69.5 156.8 66C156.55 56.5 156.467 47.2083 156.55 38.125C156.633 28.9583 156.217 19.5833 155.3 10C155.3 8.41667 155.675 7.375 156.425 6.875C157.175 6.29167 158.3 6 159.8 6C161.717 6 163.342 6.58333 164.675 7.75C166.092 8.83333 166.842 10.375 166.925 12.375C166.758 24.2083 166.883 35.9583 167.3 47.625C167.8 59.2083 168.05 70.9583 168.05 82.875V92.5C167.55 93.1667 166.842 93.8333 165.925 94.5C165.008 95.1667 164.092 95.4167 163.175 95.25C160.758 94.8333 159.008 93.875 157.925 92.375C156.842 90.7917 156.3 88.8333 156.3 86.5Z" />
                            <path d="M199.175 83.375C198.592 84.625 198.008 86 197.425 87.5C196.842 88.9167 196.175 90.2083 195.425 91.375C194.675 92.5417 193.758 93.5417 192.675 94.375C191.592 95.125 190.217 95.5 188.55 95.5C185.633 95.5 183.217 94.7917 181.3 93.375C179.383 91.875 177.8 90.0417 176.55 87.875C175.383 85.625 174.55 83.2083 174.05 80.625C173.55 78.0417 173.3 75.625 173.3 73.375L174.3 43.125C174.217 42.5417 174.342 41.9583 174.675 41.375C175.092 40.7083 175.592 40.125 176.175 39.625C176.842 39.0417 177.55 38.5833 178.3 38.25C179.133 37.9167 179.883 37.75 180.55 37.75C182.467 37.75 184.092 38.375 185.425 39.625C186.758 40.7917 187.425 42.3333 187.425 44.25V45.5C186.508 47 185.717 48.9583 185.05 51.375C184.383 53.7917 183.842 56.4167 183.425 59.25C183.092 62 182.883 64.8333 182.8 67.75C182.717 70.6667 182.8 73.3333 183.05 75.75C183.383 78.1667 183.883 80.25 184.55 82C185.217 83.6667 186.092 84.6667 187.175 85C187.592 85 188.217 84.7917 189.05 84.375C189.967 83.9583 190.925 83.1667 191.925 82C192.925 80.8333 193.967 79.2083 195.05 77.125C196.133 74.9583 197.092 72.125 197.925 68.625C198.758 65.125 199.383 60.875 199.8 55.875C200.217 50.875 200.342 44.875 200.175 37.875C200.508 36.9583 200.967 36.4583 201.55 36.375C202.217 36.2917 202.883 36.25 203.55 36.25C204.3 36.25 204.925 36.2917 205.425 36.375C205.925 36.375 206.467 36.6667 207.05 37.25C207.467 37.6667 207.925 38.2917 208.425 39.125C208.925 39.9583 209.175 40.4167 209.175 40.5L211.3 95.875C211.3 97.125 210.967 98.1667 210.3 99C209.633 99.8333 208.675 100.25 207.425 100.25C207.008 100.25 206.508 100.208 205.925 100.125C205.342 100.042 204.758 99.875 204.175 99.625C203.592 99.375 203.05 99.0417 202.55 98.625C202.133 98.2917 201.883 97.875 201.8 97.375L199.675 84.875L199.175 83.375Z" />
                            <path d="M218.175 80.25C217.592 77.75 217.592 74.7917 218.175 71.375C218.842 67.9583 219.842 64.5417 221.175 61.125C222.592 57.625 224.3 54.3333 226.3 51.25C228.383 48.1667 230.55 45.7083 232.8 43.875C235.133 42.0417 237.467 41.0417 239.8 40.875C242.217 40.625 244.508 41.6667 246.675 44C246.675 44.0833 246.717 44.2917 246.8 44.625C246.883 44.9583 246.967 45.6667 247.05 46.75C247.133 47.75 247.175 49.2083 247.175 51.125C247.258 52.9583 247.3 55.5 247.3 58.75C247.383 58.9167 247.467 59.2083 247.55 59.625C247.717 59.9583 247.8 60.2083 247.8 60.375C247.55 61.2917 247.05 62.1667 246.3 63C245.633 63.75 244.758 64.125 243.675 64.125C242.258 64.125 241.092 63.9167 240.175 63.5C239.342 63 238.717 61.875 238.3 60.125C238.467 59.875 238.508 59.375 238.425 58.625C238.342 57.7917 238.175 56.875 237.925 55.875C237.758 54.875 237.592 53.875 237.425 52.875C237.258 51.875 237.175 51.0833 237.175 50.5C237.092 50.5 236.967 50.5833 236.8 50.75C236.717 50.8333 236.633 50.9167 236.55 51C235.133 53.5 233.8 56.2917 232.55 59.375C231.383 62.375 230.467 65.4583 229.8 68.625C229.217 71.7083 229.008 74.7917 229.175 77.875C229.425 80.9583 230.342 83.75 231.925 86.25C233.092 86.25 234.175 85.7917 235.175 84.875C236.175 83.875 237.008 82.9583 237.675 82.125C239.092 80.4583 240.467 78.75 241.8 77C243.217 75.25 244.508 73.4167 245.675 71.5C246.175 70.6667 246.55 69.9167 246.8 69.25C247.05 68.5833 247.342 68.0417 247.675 67.625C248.092 67.2083 248.592 66.875 249.175 66.625C249.758 66.375 250.633 66.25 251.8 66.25C253.133 66.25 254.383 66.5833 255.55 67.25C256.717 67.8333 257.3 68.8333 257.3 70.25C257.3 72.1667 256.425 74.5833 254.675 77.5C253.008 80.3333 250.925 83.0833 248.425 85.75C246.008 88.4167 243.425 90.7083 240.675 92.625C237.925 94.4583 235.508 95.375 233.425 95.375C231.425 95.375 229.467 95 227.55 94.25C225.717 93.4167 224.092 92.3333 222.675 91C221.342 89.6667 220.258 88.0833 219.425 86.25C218.592 84.4167 218.175 82.4167 218.175 80.25Z" />
                            <path d="M281.3 90.5C281.3 90.0833 281.3 89.7083 281.3 89.375C281.383 89.0417 281.592 88.7083 281.925 88.375C282.925 87.125 284.05 85.8333 285.3 84.5C286.55 83.0833 287.758 81.7083 288.925 80.375C290.092 78.9583 291.175 77.5 292.175 76C293.175 74.5 294.008 73 294.675 71.5V70.75L278.3 74.125H276.425C275.258 74.125 273.8 74.0417 272.05 73.875C270.383 73.7083 268.717 73.375 267.05 72.875C265.467 72.2917 264.092 71.5 262.925 70.5C261.842 69.5 261.3 68.1667 261.3 66.5C261.383 64.5833 262.383 62.4583 264.3 60.125C266.217 57.7917 268.467 55.5 271.05 53.25C273.633 51 276.217 48.9167 278.8 47C281.467 45.0833 283.592 43.5833 285.175 42.5C286.925 41.5 289.008 40.7083 291.425 40.125C293.842 39.4583 296.05 39.125 298.05 39.125C299.717 39.125 301.175 39.4583 302.425 40.125C303.675 40.7083 304.3 41.9167 304.3 43.75C304.3 44.5 304.217 45.2083 304.05 45.875C303.967 46.5417 303.467 47 302.55 47.25C299.883 47 297.383 47.2083 295.05 47.875C292.717 48.4583 290.508 49.375 288.425 50.625C286.342 51.875 284.383 53.375 282.55 55.125C280.717 56.7917 278.925 58.5417 277.175 60.375C276.675 60.9583 276.05 61.7917 275.3 62.875C274.55 63.875 274.175 64.4583 274.175 64.625V64.75C276.342 64.75 278.467 64.5417 280.55 64.125C282.717 63.7083 284.842 63.2917 286.925 62.875C289.092 62.375 291.217 61.9167 293.3 61.5C295.467 61.0833 297.675 60.875 299.925 60.875C300.758 60.875 301.675 60.9583 302.675 61.125C303.675 61.2083 304.592 61.4583 305.425 61.875C306.342 62.2917 307.05 62.875 307.55 63.625C308.133 64.2917 308.425 65.1667 308.425 66.25C308.425 67.8333 308.008 69.375 307.175 70.875C306.425 72.2917 305.258 74.0417 303.675 76.125C302.175 78.125 300.217 80.5833 297.8 83.5C295.467 86.4167 292.675 90.1667 289.425 94.75C289.258 95 288.842 95.1667 288.175 95.25C287.592 95.3333 287.092 95.375 286.675 95.375C285.508 95.375 284.3 94.875 283.05 93.875C281.883 92.875 281.3 91.75 281.3 90.5Z" />
                            <path d="M332.8 90.5C332.8 90.0833 332.8 89.7083 332.8 89.375C332.883 89.0417 333.092 88.7083 333.425 88.375C334.425 87.125 335.55 85.8333 336.8 84.5C338.05 83.0833 339.258 81.7083 340.425 80.375C341.592 78.9583 342.675 77.5 343.675 76C344.675 74.5 345.508 73 346.175 71.5V70.75L329.8 74.125H327.925C326.758 74.125 325.3 74.0417 323.55 73.875C321.883 73.7083 320.217 73.375 318.55 72.875C316.967 72.2917 315.592 71.5 314.425 70.5C313.342 69.5 312.8 68.1667 312.8 66.5C312.883 64.5833 313.883 62.4583 315.8 60.125C317.717 57.7917 319.967 55.5 322.55 53.25C325.133 51 327.717 48.9167 330.3 47C332.967 45.0833 335.092 43.5833 336.675 42.5C338.425 41.5 340.508 40.7083 342.925 40.125C345.342 39.4583 347.55 39.125 349.55 39.125C351.217 39.125 352.675 39.4583 353.925 40.125C355.175 40.7083 355.8 41.9167 355.8 43.75C355.8 44.5 355.717 45.2083 355.55 45.875C355.467 46.5417 354.967 47 354.05 47.25C351.383 47 348.883 47.2083 346.55 47.875C344.217 48.4583 342.008 49.375 339.925 50.625C337.842 51.875 335.883 53.375 334.05 55.125C332.217 56.7917 330.425 58.5417 328.675 60.375C328.175 60.9583 327.55 61.7917 326.8 62.875C326.05 63.875 325.675 64.4583 325.675 64.625V64.75C327.842 64.75 329.967 64.5417 332.05 64.125C334.217 63.7083 336.342 63.2917 338.425 62.875C340.592 62.375 342.717 61.9167 344.8 61.5C346.967 61.0833 349.175 60.875 351.425 60.875C352.258 60.875 353.175 60.9583 354.175 61.125C355.175 61.2083 356.092 61.4583 356.925 61.875C357.842 62.2917 358.55 62.875 359.05 63.625C359.633 64.2917 359.925 65.1667 359.925 66.25C359.925 67.8333 359.508 69.375 358.675 70.875C357.925 72.2917 356.758 74.0417 355.175 76.125C353.675 78.125 351.717 80.5833 349.3 83.5C346.967 86.4167 344.175 90.1667 340.925 94.75C340.758 95 340.342 95.1667 339.675 95.25C339.092 95.3333 338.592 95.375 338.175 95.375C337.008 95.375 335.8 94.875 334.55 93.875C333.383 92.875 332.8 91.75 332.8 90.5Z" />
                        </mask>
                        <path d="M33.55 75.5C33.4667 75.5 32.8833 76.4167 31.8 78.25C30.8 80.0833 29.425 82.0833 27.675 84.25C25.925 86.4167 23.8417 88.4167 21.425 90.25C19.0917 92.0833 16.5917 93 13.925 93C10.2583 93 7.175 91.875 4.675 89.625C2.25833 87.375 1.05 84.2917 1.05 80.375C0.883333 78.375 1.13333 76 1.8 73.25C2.55 70.5 3.59167 67.6667 4.925 64.75C6.34167 61.75 8.00833 58.875 9.925 56.125C11.925 53.2917 14.05 50.875 16.3 48.875C18.55 46.7917 20.8833 45.25 23.3 44.25C25.8 43.25 28.3 43.0833 30.8 43.75V42C30.8 39.8333 30.7167 37.625 30.55 35.375C30.4667 33.0417 30.3417 30.4167 30.175 27.5C30.0917 24.5 29.9667 21.0833 29.8 17.25C29.7167 13.3333 29.675 8.66667 29.675 3.25C29.925 2.33333 30.3417 1.75 30.925 1.5C31.5917 1.16667 32.3 1 33.05 1C34.9667 1 36.4667 1.625 37.55 2.875C38.7167 4.125 39.425 5.66667 39.675 7.5C39.5083 10.3333 39.425 13.25 39.425 16.25C39.5083 19.1667 39.675 22.5 39.925 26.25C40.175 30 40.55 34.25 41.05 39C41.6333 43.75 42.3417 49.375 43.175 55.875C44.0083 62.2917 45.0083 69.7083 46.175 78.125C47.3417 86.4583 48.7167 96.125 50.3 107.125V111.375C50.3 111.875 50.0917 112.25 49.675 112.5C49.3417 112.75 48.8833 112.917 48.3 113C47.8 113.167 47.2583 113.25 46.675 113.25C46.175 113.333 45.8 113.375 45.55 113.375C44.3 113.375 42.9667 113 41.55 112.25C40.1333 111.583 39.3 110.625 39.05 109.375L34.425 76C34.425 75.75 34.3 75.625 34.05 75.625C33.8833 75.5417 33.7167 75.5 33.55 75.5ZM11.55 78.25C11.55 78.5 11.5083 78.9583 11.425 79.625C11.425 80.2083 11.425 80.8333 11.425 81.5C11.5083 82.1667 11.6333 82.75 11.8 83.25C11.9667 83.75 12.3 84 12.8 84C14.8833 84.0833 17.0083 83.2917 19.175 81.625C21.425 79.9583 23.4667 77.9167 25.3 75.5C27.1333 73 28.6333 70.3333 29.8 67.5C31.05 64.6667 31.7167 62.125 31.8 59.875C31.9667 57.625 31.425 55.9167 30.175 54.75C29.0083 53.5 26.9667 53.2083 24.05 53.875C20.4667 57.0417 17.4667 60.6667 15.05 64.75C12.7167 68.8333 11.55 73.3333 11.55 78.25Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M82.8 60.375C82.05 61.7083 81.175 63.3333 80.175 65.25C79.2583 67.0833 78.2583 69.0833 77.175 71.25C76.0917 73.3333 74.8833 75.4583 73.55 77.625C72.3 79.7083 70.9667 81.625 69.55 83.375C68.2167 85.125 66.8 86.625 65.3 87.875C63.8 89.0417 62.2583 89.75 60.675 90C60.0083 90 59.2583 89.9583 58.425 89.875C57.5917 89.7083 56.7583 89.5 55.925 89.25C55.0917 88.9167 54.3833 88.5 53.8 88C53.3 87.4167 53.05 86.6667 53.05 85.75C53.1333 77.25 53.7583 69.5417 54.925 62.625C56.0917 55.625 57.925 49.5 60.425 44.25C62.925 38.9167 66.1333 34.5 70.05 31C73.9667 27.5 78.7167 25 84.3 23.5C84.4667 23.5 84.7583 23.5 85.175 23.5C85.675 23.4167 86.0083 23.375 86.175 23.375C88.675 23.2917 90.4667 24.4583 91.55 26.875C92.7167 29.2083 93.55 32.9583 94.05 38.125C94.6333 43.2083 95.0083 49.7917 95.175 57.875C95.425 65.875 95.8833 75.5 96.55 86.75C96.8 87.6667 96.925 88.4583 96.925 89.125C97.0083 89.7917 97.05 90.5833 97.05 91.5C97.05 92.75 96.675 93.7083 95.925 94.375C95.175 94.9583 94.2167 95.25 93.05 95.25C90.6333 95.25 88.925 94.5833 87.925 93.25C86.925 91.9167 86.2583 90.125 85.925 87.875C85.925 87.7917 85.8417 87.125 85.675 85.875C85.5917 84.625 85.425 83.2083 85.175 81.625C85.0083 79.9583 84.8417 78.2917 84.675 76.625C84.5083 74.9583 84.3833 73.5833 84.3 72.5V72C84.1333 71.1667 84.0083 70.125 83.925 68.875C83.925 67.625 83.8417 66.4167 83.675 65.25C83.5083 63.8333 83.3833 62.4167 83.3 61L82.8 60.375ZM80.05 35.625C77.8 37.2917 75.5917 39.5417 73.425 42.375C71.2583 45.2083 69.7167 47.9583 68.8 50.625C68.3833 51.875 67.925 53.5833 67.425 55.75C66.925 57.9167 66.4667 60.0833 66.05 62.25C65.7167 64.3333 65.425 66.2917 65.175 68.125C64.925 69.875 64.8 71 64.8 71.5C64.8833 71.5 64.9667 71.4167 65.05 71.25C65.2167 71.0833 65.3417 70.9583 65.425 70.875C70.5917 65.875 74.2167 60.5 76.3 54.75C78.4667 48.9167 79.7167 42.5417 80.05 35.625Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M139.175 91C138.008 89.3333 137.008 87.0417 136.175 84.125C135.425 81.125 134.675 78 133.925 74.75C133.258 71.4167 132.633 68.2083 132.05 65.125C131.467 61.9583 130.842 59.4583 130.175 57.625C129.592 55.7083 128.925 54.625 128.175 54.375C127.425 54.125 126.55 55.25 125.55 57.75L114.675 91.25C114.258 92.4167 113.758 93.25 113.175 93.75C112.592 94.1667 111.633 94.375 110.3 94.375C109.633 94.375 108.925 94.2917 108.175 94.125C107.425 93.875 106.717 93.5417 106.05 93.125C105.383 92.7083 104.8 92.2083 104.3 91.625C103.883 91.0417 103.633 90.375 103.55 89.625C103.8 88.625 104.008 86.7917 104.175 84.125C104.425 81.4583 104.592 78.375 104.675 74.875C104.758 71.375 104.8 67.7083 104.8 63.875C104.883 59.9583 104.883 56.3333 104.8 53C104.8 49.5833 104.758 46.6667 104.675 44.25C104.592 41.75 104.508 40.125 104.425 39.375C104.425 38.5417 104.425 37.7083 104.425 36.875C104.508 35.9583 104.633 35.125 104.8 34.375C105.05 33.625 105.425 33.0417 105.925 32.625C106.508 32.125 107.383 31.875 108.55 31.875C110.133 31.875 111.592 32.5417 112.925 33.875C114.342 35.2083 115.05 36.625 115.05 38.125C115.05 40.2917 114.925 42.4583 114.675 44.625C114.508 46.7083 114.425 48.8333 114.425 51C114.425 52.3333 114.425 53.4583 114.425 54.375C114.425 55.2917 114.592 56.4167 114.925 57.75C115.175 57.0833 115.592 55.9167 116.175 54.25C116.758 52.5833 117.383 50.8333 118.05 49C118.8 47.1667 119.467 45.4583 120.05 43.875C120.633 42.2083 121.05 41.0417 121.3 40.375C121.883 38.7083 122.758 37.125 123.925 35.625C125.092 34.0417 126.633 33.1667 128.55 33C129.8 32.9167 130.925 33.25 131.925 34C133.008 34.75 133.925 35.75 134.675 37C135.425 38.1667 136.05 39.4167 136.55 40.75C137.05 42 137.425 43.0833 137.675 44L144.425 75.125L149.675 89.375C149.758 89.4583 149.8 89.7083 149.8 90.125C149.8 90.4583 149.8 90.7083 149.8 90.875C149.8 91.875 149.55 92.875 149.05 93.875C148.633 94.7917 147.842 95.25 146.675 95.25C145.258 95.25 143.8 94.875 142.3 94.125C140.8 93.2917 139.758 92.25 139.175 91Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M156.3 86.5C156.3 83 156.383 79.5833 156.55 76.25C156.717 72.9167 156.8 69.5 156.8 66C156.55 56.5 156.467 47.2083 156.55 38.125C156.633 28.9583 156.217 19.5833 155.3 10C155.3 8.41667 155.675 7.375 156.425 6.875C157.175 6.29167 158.3 6 159.8 6C161.717 6 163.342 6.58333 164.675 7.75C166.092 8.83333 166.842 10.375 166.925 12.375C166.758 24.2083 166.883 35.9583 167.3 47.625C167.8 59.2083 168.05 70.9583 168.05 82.875V92.5C167.55 93.1667 166.842 93.8333 165.925 94.5C165.008 95.1667 164.092 95.4167 163.175 95.25C160.758 94.8333 159.008 93.875 157.925 92.375C156.842 90.7917 156.3 88.8333 156.3 86.5Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M199.175 83.375C198.592 84.625 198.008 86 197.425 87.5C196.842 88.9167 196.175 90.2083 195.425 91.375C194.675 92.5417 193.758 93.5417 192.675 94.375C191.592 95.125 190.217 95.5 188.55 95.5C185.633 95.5 183.217 94.7917 181.3 93.375C179.383 91.875 177.8 90.0417 176.55 87.875C175.383 85.625 174.55 83.2083 174.05 80.625C173.55 78.0417 173.3 75.625 173.3 73.375L174.3 43.125C174.217 42.5417 174.342 41.9583 174.675 41.375C175.092 40.7083 175.592 40.125 176.175 39.625C176.842 39.0417 177.55 38.5833 178.3 38.25C179.133 37.9167 179.883 37.75 180.55 37.75C182.467 37.75 184.092 38.375 185.425 39.625C186.758 40.7917 187.425 42.3333 187.425 44.25V45.5C186.508 47 185.717 48.9583 185.05 51.375C184.383 53.7917 183.842 56.4167 183.425 59.25C183.092 62 182.883 64.8333 182.8 67.75C182.717 70.6667 182.8 73.3333 183.05 75.75C183.383 78.1667 183.883 80.25 184.55 82C185.217 83.6667 186.092 84.6667 187.175 85C187.592 85 188.217 84.7917 189.05 84.375C189.967 83.9583 190.925 83.1667 191.925 82C192.925 80.8333 193.967 79.2083 195.05 77.125C196.133 74.9583 197.092 72.125 197.925 68.625C198.758 65.125 199.383 60.875 199.8 55.875C200.217 50.875 200.342 44.875 200.175 37.875C200.508 36.9583 200.967 36.4583 201.55 36.375C202.217 36.2917 202.883 36.25 203.55 36.25C204.3 36.25 204.925 36.2917 205.425 36.375C205.925 36.375 206.467 36.6667 207.05 37.25C207.467 37.6667 207.925 38.2917 208.425 39.125C208.925 39.9583 209.175 40.4167 209.175 40.5L211.3 95.875C211.3 97.125 210.967 98.1667 210.3 99C209.633 99.8333 208.675 100.25 207.425 100.25C207.008 100.25 206.508 100.208 205.925 100.125C205.342 100.042 204.758 99.875 204.175 99.625C203.592 99.375 203.05 99.0417 202.55 98.625C202.133 98.2917 201.883 97.875 201.8 97.375L199.675 84.875L199.175 83.375Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M218.175 80.25C217.592 77.75 217.592 74.7917 218.175 71.375C218.842 67.9583 219.842 64.5417 221.175 61.125C222.592 57.625 224.3 54.3333 226.3 51.25C228.383 48.1667 230.55 45.7083 232.8 43.875C235.133 42.0417 237.467 41.0417 239.8 40.875C242.217 40.625 244.508 41.6667 246.675 44C246.675 44.0833 246.717 44.2917 246.8 44.625C246.883 44.9583 246.967 45.6667 247.05 46.75C247.133 47.75 247.175 49.2083 247.175 51.125C247.258 52.9583 247.3 55.5 247.3 58.75C247.383 58.9167 247.467 59.2083 247.55 59.625C247.717 59.9583 247.8 60.2083 247.8 60.375C247.55 61.2917 247.05 62.1667 246.3 63C245.633 63.75 244.758 64.125 243.675 64.125C242.258 64.125 241.092 63.9167 240.175 63.5C239.342 63 238.717 61.875 238.3 60.125C238.467 59.875 238.508 59.375 238.425 58.625C238.342 57.7917 238.175 56.875 237.925 55.875C237.758 54.875 237.592 53.875 237.425 52.875C237.258 51.875 237.175 51.0833 237.175 50.5C237.092 50.5 236.967 50.5833 236.8 50.75C236.717 50.8333 236.633 50.9167 236.55 51C235.133 53.5 233.8 56.2917 232.55 59.375C231.383 62.375 230.467 65.4583 229.8 68.625C229.217 71.7083 229.008 74.7917 229.175 77.875C229.425 80.9583 230.342 83.75 231.925 86.25C233.092 86.25 234.175 85.7917 235.175 84.875C236.175 83.875 237.008 82.9583 237.675 82.125C239.092 80.4583 240.467 78.75 241.8 77C243.217 75.25 244.508 73.4167 245.675 71.5C246.175 70.6667 246.55 69.9167 246.8 69.25C247.05 68.5833 247.342 68.0417 247.675 67.625C248.092 67.2083 248.592 66.875 249.175 66.625C249.758 66.375 250.633 66.25 251.8 66.25C253.133 66.25 254.383 66.5833 255.55 67.25C256.717 67.8333 257.3 68.8333 257.3 70.25C257.3 72.1667 256.425 74.5833 254.675 77.5C253.008 80.3333 250.925 83.0833 248.425 85.75C246.008 88.4167 243.425 90.7083 240.675 92.625C237.925 94.4583 235.508 95.375 233.425 95.375C231.425 95.375 229.467 95 227.55 94.25C225.717 93.4167 224.092 92.3333 222.675 91C221.342 89.6667 220.258 88.0833 219.425 86.25C218.592 84.4167 218.175 82.4167 218.175 80.25Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M281.3 90.5C281.3 90.0833 281.3 89.7083 281.3 89.375C281.383 89.0417 281.592 88.7083 281.925 88.375C282.925 87.125 284.05 85.8333 285.3 84.5C286.55 83.0833 287.758 81.7083 288.925 80.375C290.092 78.9583 291.175 77.5 292.175 76C293.175 74.5 294.008 73 294.675 71.5V70.75L278.3 74.125H276.425C275.258 74.125 273.8 74.0417 272.05 73.875C270.383 73.7083 268.717 73.375 267.05 72.875C265.467 72.2917 264.092 71.5 262.925 70.5C261.842 69.5 261.3 68.1667 261.3 66.5C261.383 64.5833 262.383 62.4583 264.3 60.125C266.217 57.7917 268.467 55.5 271.05 53.25C273.633 51 276.217 48.9167 278.8 47C281.467 45.0833 283.592 43.5833 285.175 42.5C286.925 41.5 289.008 40.7083 291.425 40.125C293.842 39.4583 296.05 39.125 298.05 39.125C299.717 39.125 301.175 39.4583 302.425 40.125C303.675 40.7083 304.3 41.9167 304.3 43.75C304.3 44.5 304.217 45.2083 304.05 45.875C303.967 46.5417 303.467 47 302.55 47.25C299.883 47 297.383 47.2083 295.05 47.875C292.717 48.4583 290.508 49.375 288.425 50.625C286.342 51.875 284.383 53.375 282.55 55.125C280.717 56.7917 278.925 58.5417 277.175 60.375C276.675 60.9583 276.05 61.7917 275.3 62.875C274.55 63.875 274.175 64.4583 274.175 64.625V64.75C276.342 64.75 278.467 64.5417 280.55 64.125C282.717 63.7083 284.842 63.2917 286.925 62.875C289.092 62.375 291.217 61.9167 293.3 61.5C295.467 61.0833 297.675 60.875 299.925 60.875C300.758 60.875 301.675 60.9583 302.675 61.125C303.675 61.2083 304.592 61.4583 305.425 61.875C306.342 62.2917 307.05 62.875 307.55 63.625C308.133 64.2917 308.425 65.1667 308.425 66.25C308.425 67.8333 308.008 69.375 307.175 70.875C306.425 72.2917 305.258 74.0417 303.675 76.125C302.175 78.125 300.217 80.5833 297.8 83.5C295.467 86.4167 292.675 90.1667 289.425 94.75C289.258 95 288.842 95.1667 288.175 95.25C287.592 95.3333 287.092 95.375 286.675 95.375C285.508 95.375 284.3 94.875 283.05 93.875C281.883 92.875 281.3 91.75 281.3 90.5Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                        <path d="M332.8 90.5C332.8 90.0833 332.8 89.7083 332.8 89.375C332.883 89.0417 333.092 88.7083 333.425 88.375C334.425 87.125 335.55 85.8333 336.8 84.5C338.05 83.0833 339.258 81.7083 340.425 80.375C341.592 78.9583 342.675 77.5 343.675 76C344.675 74.5 345.508 73 346.175 71.5V70.75L329.8 74.125H327.925C326.758 74.125 325.3 74.0417 323.55 73.875C321.883 73.7083 320.217 73.375 318.55 72.875C316.967 72.2917 315.592 71.5 314.425 70.5C313.342 69.5 312.8 68.1667 312.8 66.5C312.883 64.5833 313.883 62.4583 315.8 60.125C317.717 57.7917 319.967 55.5 322.55 53.25C325.133 51 327.717 48.9167 330.3 47C332.967 45.0833 335.092 43.5833 336.675 42.5C338.425 41.5 340.508 40.7083 342.925 40.125C345.342 39.4583 347.55 39.125 349.55 39.125C351.217 39.125 352.675 39.4583 353.925 40.125C355.175 40.7083 355.8 41.9167 355.8 43.75C355.8 44.5 355.717 45.2083 355.55 45.875C355.467 46.5417 354.967 47 354.05 47.25C351.383 47 348.883 47.2083 346.55 47.875C344.217 48.4583 342.008 49.375 339.925 50.625C337.842 51.875 335.883 53.375 334.05 55.125C332.217 56.7917 330.425 58.5417 328.675 60.375C328.175 60.9583 327.55 61.7917 326.8 62.875C326.05 63.875 325.675 64.4583 325.675 64.625V64.75C327.842 64.75 329.967 64.5417 332.05 64.125C334.217 63.7083 336.342 63.2917 338.425 62.875C340.592 62.375 342.717 61.9167 344.8 61.5C346.967 61.0833 349.175 60.875 351.425 60.875C352.258 60.875 353.175 60.9583 354.175 61.125C355.175 61.2083 356.092 61.4583 356.925 61.875C357.842 62.2917 358.55 62.875 359.05 63.625C359.633 64.2917 359.925 65.1667 359.925 66.25C359.925 67.8333 359.508 69.375 358.675 70.875C357.925 72.2917 356.758 74.0417 355.175 76.125C353.675 78.125 351.717 80.5833 349.3 83.5C346.967 86.4167 344.175 90.1667 340.925 94.75C340.758 95 340.342 95.1667 339.675 95.25C339.092 95.3333 338.592 95.375 338.175 95.375C337.008 95.375 335.8 94.875 334.55 93.875C333.383 92.875 332.8 91.75 332.8 90.5Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1_112_21)" />
                    </svg> */}


            </Link>

            <nav className={showNav ? "mobile-show" : ""} >


                <NavLink to='/' exact="true" activeclassname='active'>
                    <i className="icon-home">
                        <img src={homeIcon} alt="home" />
                    </i>
                </NavLink>

                <NavLink to='/about' className="about-link">
                    <i className="icon-user">
                        <img src={aboutIcon} alt="about" />
                    </i>
                </NavLink>

                <NavLink to='/portifolio' className="portifolio-link" >
                    <i className="icon-portifolio">
                        <img src={portifolioIcon} alt="portifolio" />
                    </i>
                </NavLink>

                <NavLink to='/contact' className="contact-link">
                    <i className="icon-contact">
                        <img src={contactIcon} alt="contact" />
                    </i>

                </NavLink>


                <VscClose className='menu-close' onClick={() => {
                    setShowNav(false)
                    const menuOpen = document.querySelector('.hamburguer-icon');

                    menuOpen.style.display = 'block';
                }} />
            </nav >

            <ul>
                <li>
                    <a href='https://github.com/danlucss' target="_blank" rel='noreferrer'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/danlucss' target="_blank" rel='noreferrer'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href='mailto:daniellucas.bio@gmail.com' target="_blank" rel='noreferrer'>
                        <SiGmail />
                    </a>
                </li>
                <li>
                    <a href='http://api.whatsapp.com/send?phone=5562993298751' target="_blank" rel='noreferrer'>
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>
            <FaBars onClick={() => {
                const menuOpen = document.querySelector('.hamburguer-icon');

                setShowNav(true)
                menuOpen.style.display = 'none';

            }
            } className='hamburguer-icon' />
        </div >

    )
};

export default Sidebar;