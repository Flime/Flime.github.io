import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {

    // 定义背景图片链接数组
    const desktopBackgroundImages = [
        "/docs/desqhlg.jpg"
    ];

    const mobileBackgroundImages = [
        "/docs/mobqhlg.jpg"
    ];

    // 判断屏幕比例是否接近手机（高宽比大于1）
    var isMobileRatioOld;
    const isMobileRatio = () => {
        const aspectRatio = window.innerHeight / window.innerWidth;
        return aspectRatio > 1;
    };

    // 定义状态存储背景图片
    const [backgroundImage, setBackgroundImage] = useState('');

    // 随机选择背景图片
    const selectRandomBackgroundImage = () => {
        const images = isMobileRatio() ? mobileBackgroundImages : desktopBackgroundImages;
        const randomIndex = Math.floor(Math.random() * images.length);
        setBackgroundImage(images[randomIndex]);
    };

    const [openTime, setOpenTime] = useState('');

    // 在组件挂载时选择背景图片
    useEffect(() => {

        update();
        setInterval(() => {
            update();
        }, 100);

        function update() {
            setOpenTime(TimetoTextDay(new Date() - 1735535401290));
        }

        function TimetoTextDay(time) {
            return `${Math.round(time / 864) / 100000}天`;
        }
        
        // 初始化时选择背景图片
        selectRandomBackgroundImage();
        isMobileRatioOld = isMobileRatio();

        // 监听窗口大小变化，动态调整背景图片
        const handleResize = () => {
            if (isMobileRatio() == isMobileRatioOld) return;
            isMobileRatioOld = isMobileRatio();
            selectRandomBackgroundImage();
        };

        // 添加resize事件监听器
        window.addEventListener('resize', handleResize);

        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <Layout description='Flime帮助文档，Flime'>
            <div id='index-page-container'>
                {/* Set the background image dynamically */}
                <div id='index-page-bg' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>
                    <div id='logo' style={{ textAlign: "center", color: "#fa4" }}>
                        <span>计算机没有什么用处,它们唯一能做的就是告诉你答案</span>
                    </div>
                    <div id='index-page-description' style={{ textAlign: "center"}}>
                        这里是Flime的使用说明~<br />本站已启用{openTime}
                    </div>
                    <div id='index-page-button-container'>
                        <div id='index-page-button'>
                            <Link
                                className="button button--secondary button--lg"
                                to="./blog">
                                更新日志
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/command">
                                使用说明
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
