import React, { useState } from 'react';
import styles from './../../../_App.module.scss'
import tabsStyle from './tabs.module.scss';
import ImgFeatures from '../imgFeatures/imgFeatures'
import imgFeaturesStyles from '../imgFeatures/imgFeatures.module.scss'
import FeatureOne from '/illustration-features-tab-1.svg'
import FeatureTwo from '/illustration-features-tab-2.svg'
import FeatureThree from '/illustration-features-tab-3.svg'

export default function Tabs() {

  const [active, setActive] = useState('tab-1');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.id);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="tabs">
            <button className={`${tabsStyle["tab-button"]} ${active === 'tab-1' ? tabsStyle["active"] : ''}`} id="tab-1" onClick={handleClick}>
              Simple Bookmarking
            </button>
            <button className={`${tabsStyle["tab-button"]} ${active === 'tab-2' ? tabsStyle["active"] : ''}`} id="tab-2" onClick={handleClick}>
              Speedy Searching
            </button>
            <button className={`${tabsStyle["tab-button"]} ${active === 'tab-3' ? tabsStyle["active"] : ''}`} id="tab-3" onClick={handleClick}>
              Easy Sharing
            </button>
          </div>
          <div className={`${tabsStyle["tabs-content"]}`}>
            <div className={`${tabsStyle["tab-page"]} ${active === 'tab-1' ? tabsStyle["active"] : ''}`}>
              <div className={`${styles['row']} ${styles['my-5']}`}>
                <ImgFeatures src={FeatureOne} style={imgFeaturesStyles["img-monitor"]} alt="Feature 1" />
                <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['my-md-4']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
                        <div>
                            <h5 className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-align-md-center"]}`}>Bookmark in one click</h5>
                            <p className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-light"]} ${styles["text-align-md-center"]}`}>Organize your bookmarks however you like. Our <br className="d-block d-md-none" />simple drag-and-drop interface gives you complete <br className="d-block d-md-none" />control over how you manage your favorite sites.</p>
                            <button type="button" className={`${styles["btn-blue"]} ${styles['d-block']} ${styles['mx-md-auto']}`}>More info</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={`${tabsStyle["tab-page"]} ${active === 'tab-2' ? tabsStyle["active"] : ''}`}>
              <div className={`${styles['row']} ${styles['my-5']}`}>
                <ImgFeatures src={FeatureTwo} style={imgFeaturesStyles["img-monitor"]} alt="Feature 2" />
                <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['my-md-4']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
                        <div>
                            <h5 className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-align-md-center"]}`}>Intelligent search</h5>
                            <p className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-light"]} ${styles["text-align-md-center"]}`}>Our powerful search feature will help you find saved <br className="d-block d-md-none" />sites in no time at all. No need to trawl through all of <br className="d-block d-md-none" />your bookmarks.</p>
                            <button type="button" className={`${styles["btn-blue"]} ${styles['d-block']} ${styles['mx-md-auto']}`}>More info</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={`${tabsStyle["tab-page"]} ${active === 'tab-3' ? tabsStyle["active"] : ''}`}>
              <div className={`${styles['row']} ${styles['my-5']}`}>
                <ImgFeatures src={FeatureThree} style={imgFeaturesStyles["img-monitor"]} alt="Feature 3" />
                <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['my-md-4']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
                        <div>
                            <h5 className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-align-md-center"]}`}>Share your bookmarks</h5>
                            <p className={`${styles["mb-3"]} ${styles['text-left']} ${styles["text-light"]} ${styles["text-align-md-center"]}`}>Easily share your bookmarks and collections with <br className="d-block d-md-none" />other. Create a shareable link that you can send at <br className="d-block d-md-none" />the click of a button.</p>
                            <button type="button" className={`${styles["btn-blue"]} ${styles['d-block']} ${styles['mx-md-auto']}`}>More info</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}