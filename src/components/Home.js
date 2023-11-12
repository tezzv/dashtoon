import React, { useContext } from 'react';
import storyContext from '../context/story/storyContext';
import './Home.css';
import './Loader.css'
import StoryBoard from './StoryBoard';
import { Link } from 'react-router-dom';

const Home = () => {
    const context = useContext(storyContext);
    const { allimages, setAllimages, loader, resultimg, inputs, setInputs, addtoSlide, query, setGlobalIndex, globalIndex, setresultimg } = context;

    const onChangeHandler = (e) => {
        setInputs(e.target.value);
    }

    const slidesHandler = () => {
        // console.log('global', globalIndex)
        if (globalIndex === 0) {
            allimages[0] = { resultimg, inputs };
            setAllimages([...allimages]);
            setInputs(null);
            // setresultimg()
            // setGlobalIndex()
            // setGlobalIndex()

        } else if (globalIndex > 0) {
            allimages[globalIndex] = { resultimg, inputs };
            setAllimages([...allimages]);
            setInputs(null);
            // setresultimg()
            // setGlobalIndex()
            // setGlobalIndex()

        } else {
            setAllimages([...allimages, { resultimg, inputs }]);
            setresultimg()
            setGlobalIndex()
            setGlobalIndex()
            setInputs(null);
        }
    }

    return (
        <>
            <div className='home'>
                <div className='homeLeft'>
                    {!loader && resultimg && <img className='genImg' src={resultimg} alt='genImg' title={inputs} />}

                    {resultimg && addtoSlide &&

                        <button type="button" className="addbutton" onClick={slidesHandler}>
                            <span className="button__text">Add to Story</span>
                            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    }

                    {!loader &&
                        <form className="searchBox" onSubmit={query}>

                            <input className="searchInput" type="text" onChange={onChangeHandler} name="genImage" placeholder="Write your prompt here..." />
                            <button className="btn1" type='submit'
                                disabled= {inputs == null ? 'true' : ''}
                            >

                                <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                    <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                </svg>

                                <span className="text">Generate</span>
                            </button>

                        </form>
                    }

                    {loader &&
                        <div style={{ width: '60%', height: '160px', background: '#312e2e', borderRadius: '6px', display: 'flex', alignItems: 'center', }}>
                            <div style={{ marginLeft: '20px' }}>
                                <div className="loader"></div>
                            </div>

                            <div style={{ paddingLeft: '40px', paddingRight: '8px' }}>
                                <p style={{ color: 'white' }}>
                                    Hold up. We are generating your image
                                </p>
                            </div>
                        </div>
                    }

                </div>


                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <StoryBoard />
                    {/* <Link to='/preview'>Preview</Link> */}
                    {allimages.length > 0 && <Link to='/story' className='btn previwbtn'>Preview</Link>}

                </div>

            </div>
        </>
    )
}

export default Home