// 切换大清洗
var page = document.getElementsByClassName('page');
var navli = document.getElementsByClassName('navli');
var onOff=true;
var n=1;
function tab (){
    for(var i=0;i < navli.length;i++){
        navli[i].index=i;
        navli[i].onclick=function(){
            for(var i=0;i<page.length;i++){
                page[i].className="page hidden"
                navli[i].className="navli"
            }
           page[this.index].className="page show"
           this.className="navli active"
        }
           
    }
}
function tab2 (){
    if(onOff){
        for(var i=0;i<page.length;i++){
            page[i].className="page hidden"
            navli[i].className="navli"
        }
        page[n-1].className="page show"
        navli[n-1].className="navli active"
    }
}
tab();
page1_in();
function btnClick(){
   if(onOff){
    if(n==1){
        onOff=false;
        page1_in();
        page2_out();
        page3_out();
        page4_out();
        page5_out();
        $('#background').css({
            'background-position-x': '0%'
        });
        $('#leftBtn').css({
            'display':'none'
        });
        $('#rightBtn').css({
            'display':'block'
        })
    }else if(n==2){
        onOff=false;     
        page2_in();
        page1_out();
        page3_out();
        page4_out();
        page5_out();
        $('#background').css({
            'background-position-x': '20%'
        });
        $('#leftBtn').css({
            'display':'block'
        });
        $('#rightBtn').css({
            'display':'block'
        })
    }else if(n==3){
        onOff=false;
        page3_in();
        page1_out();
        page2_out();
        page4_out();
        page5_out();
        $('#background').css({
            'background-position-x': '40%'
        }); 
        $('#leftBtn').css({
            'display':'block'
        });
        $('#rightBtn').css({
            'display':'block'
        })
    }else if(n==4){
        onOff=false;
        page4_in();
        page1_out();
        page2_out();
        page3_out();
        page5_out();
        $('#background').css({
            'background-position-x': '60%'
        });
        $('#leftBtn').css({
            'display':'block'
        });
        $('#rightBtn').css({
            'display':'block'
        })
    }else if(n==5){
        onOff=false;
        page5_in();
        page1_out();
        page2_out();
        page3_out();
        page4_out();
        $('#background').css({
            'background-position-x': '80%'
        });
        $('#leftBtn').css({
            'display':'block'
        });
        $('#rightBtn').css({
            'display':'none'
        })
    }
   }
}
// Left 左点击
$('#leftBtn').click(function(){
        if(onOff){
            n--;
            if(n<1){n=1};
            tab2();
            btnClick()
        }
})
// Right 右点击
$('#rightBtn').click(function(){
       if(onOff){
        n++;
        if(n>5){n=5};
        tab2();
        btnClick()
       }
})
// 第一页运动效果
$('#navli1').click(function(){     
    n=1;
    btnClick()
});
// 第二页运动效果
$('#navli2').click(function(){
    n=2;
    btnClick()
});
// 第三页运动效果
$('#navli3').click(function(){
    n=3;
    btnClick()
});
// 第四页运动效果
$('#navli4').click(function(){
    n=4;
    btnClick()
});
// 第五页运动效果
$('#navli5').click(function(){
    n=5;
    btnClick()
});
// page1 淡入
function page1_in(){
    $('#hand').animate({
        opacity:1,
        left:0
    },1000);
    $('#page1_title').animate({
        opacity:1,
        left:'54%'
    },1000)
}
// page1 淡出
function page1_out(){
    $('#page1_title').animate({
        opacity:0,
        left:'65.8%'
    },500,function(){
        $('#hand').animate({
            opacity:0,
            left:'-40px'
        },500)
    })
}
// page2 淡入
function page2_in(){
   $('#page2_img1').animate({
       opacity:1,
       left:0
   });
   $('#page2_img2').animate({
        opacity:1,
        right:0
        },function(){
            $('#page2_img3').animate({
                opacity:1,
                margin:'0 auto',
                height: '100%',
                width: '68.22%'
            },500,function(){
                $('#page2_img_bottom').animate({
                    opacity:1,
                    bottom:0
                },500,function(){
                    $('#page2_title').animate({
                        left:'15%',
                        opacity:1
                    },1000)
                })
            })
        });
}
// page2 淡出
function page2_out(){
    $('#page2_img1').animate({
        opacity:0,
        left:'-20px'
    });
    $('#page2_img2').animate({
         opacity:0,
         right:'-20px'
         },function(){
             $('#page2_img3').animate({
                 opacity:0,
                 margin:'0px auto 0',
                 height: '105%',
                 width: '73.22%'
             },500,function(){
                 $('#page2_title').animate({
                     left:'5%',
                     opacity:0
                 },1000,function(){
                     $('#page2_img_bottom').animate({
                         opacity:0,
                         bottom:'-10px'
                     })
                 })
             })
         });
}
// page3 淡入
function page3_in(){
    $('#page3_img_top_1').animate({
        opacity:1,
        left:0
    });
    $('#page3_img_top_2').animate({
        opacity:1,
        right:0
    },function(){
        $('#page3_img_top_3').animate({
            opacity:1,
            top:0
        });
        $('#page3_img_top_4').animate({
            opacity:1,
            top:'78.0%'
        },function(){
            $('#page3_img7').animate({
                opacity:1,
                width: '43.24%',
                height: '100%',
            },function(){
                $('#page3_img6').animate({
                    opacity:1,
                    width: '31.57%',
                    height: '79%',
                    left:'64px'
                });
                $('#page3_img5').animate({
                    opacity:1,
                    width: '31.57%',
                    height: '79%',
                    right:'64px'
                },function(){
                    $('#page3_img4').animate({
                        opacity:1,
                        width: '26.95%',
                        height: '64.5%',
                        left:'30px'
                    });
                    $('#page3_img3').animate({
                        opacity:1,
                        width: '26.95%',
                        height: '64.5%',
                        right:'30px'
                    },function(){
                        $('#page3_img2').animate({
                            opacity:1,
                            width: '20.11%',
                            height: '46.18%',
                            left:0
                        });
                        $('#page3_img1').animate({
                            opacity:1,
                            width: '20.11%',
                            height: '46.18%',
                            right:0
                        },function(){
                            $('#page3_title').animate({
                                opacity:1,
                                left:'15.01%'
                            },1000)
                        })
                    })
                })
            })
        })
    })
}
// Page3 淡出
function page3_out(){
    $('#page3_img_top_1').animate({
        opacity:0,
        left:'-20px'
    });
    $('#page3_img_top_2').animate({
        opacity:0,
        right:'-20px'
    },function(){
        $('#page3_img_top_3').animate({
            opacity:0,
            top:'-20px'
        });
        $('#page3_img_top_4').animate({
            opacity:0,
            top:'58.0%'
        },function(){
            $('#page3_img7').animate({
                opacity:0,
                width: '48.24%',
                height: '105%',
            },function(){
                $('#page3_img6').animate({
                    opacity:0,
                    width: '36.57%',
                    height: '84%',
                    left:'64px'
                });
                $('#page3_img5').animate({
                    opacity:0,
                    width: '36.57%',
                    height: '84%',
                    right:'64px'
                },function(){
                    $('#page3_img4').animate({
                        opacity:0,
                        width: '31.95%',
                        height: '69.5%',
                        left:'20px'
                    });
                    $('#page3_img3').animate({
                        opacity:0,
                        width: '31.95%',
                        height: '69.5%',
                        right:'20px'
                    },function(){
                        $('#page3_img2').animate({
                            opacity:0,
                            width: '25.11%',
                            height: '51.18%',
                            left:'-10px'
                        });
                        $('#page3_img1').animate({
                            opacity:0,
                            width: '25.11%',
                            height: '51.18%',
                            right:'-10px'
                        },function(){
                            onOff=true;
                            $('#page3_title').animate({
                                opacity:0,
                                left:'5.01%'
                            },1000)
                        })
                    })
                })
            })
        });
    })
}
// Page4 淡入
function page4_in(){
    $('#page4_img_bottom').animate({
        opacity:1,
        top: '56.82%'
    },200,function(){
        $('#page4_img1').animate({
            opacity:1,
            width: '47.3%',
            height: '15.6%',
        },function(){
            $('#page4_img2').animate({
                opacity:1,
                width: '41.6%',
                height: '14.2%'
            },function(){
                $('#page4_img3').animate({
                    opacity:1,
                    width: '35.8%',
                    height: '11.3%'
                },function(){
                    $('#page4_img4').animate({
                        opacity:1,
                        width: '25.8%',
                        height: '8%'
                    },function(){
                        $('#page4_img5').animate({
                            opacity:1,
                            width: '26.5%',
                            height: '8%'
                        },function(){
                            $('#page4_img6').animate({
                                opacity:1,
                                width: '20.6%',
                                height: '6.6%'
                            },function(){
                                $('#page4_title').animate({
                                    opacity:1,
                                    left:'15.01%'
                                },1000)
                            })
                        })
                    })
                })
            })
        })
    })
}
// Page4 淡出
function page4_out(){
    $('#page4_img_bottom').animate({
        opacity:0,
        top: '63.82%'
    },200,function(){
        $('#page4_img1').animate({
            opacity:0,
            width: '37.3%',
            height: '12.6%',
        },200,function(){
            $('#page4_img2').animate({
                opacity:0,
                width: '31.6%',
                height: '11.2%'
            },200,function(){
                $('#page4_img3').animate({
                    opacity:0,
                    width: '25.8%',
                    height: '8.3%'
                },200,function(){
                    $('#page4_img4').animate({
                        opacity:0,
                        width: '15.8%',
                        height: '5%'
                    },200,function(){
                        $('#page4_img5').animate({
                            opacity:0,
                            width: '16.5%',
                            height: '5%'
                        },200,function(){
                            $('#page4_img6').animate({
                                opacity:0,
                                width: '10.6%',
                                height: '3.6%'
                            },200,function(){
                                $('#page4_title').animate({
                                    opacity:0,
                                    left:'5.01%'
                                },function(){
                                    onOff=true
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
// Page5 淡入
function page5_in(){
    $('#page5_img_chart1').animate({
        opacity:1,
        height: '57.1%'
    },1000);
    $('#page5_img_chart2').animate({
        opacity:1,
        height: '48.8%'
    },1000);
    $('#page5_img_chart3').animate({
        opacity:1,
        height: '36.8%'
    },1000);
    $('#page5_img_chart4').animate({
        opacity:1,
        height: '78.5%'
    },1000);
    $('#page5_img_chart5').animate({
        opacity:1,
        height: '54.4%'
    },1000,function(){
        $('#page5_img_tou1').animate({
            opacity:1,
            width: '6.4%',
            height: '13.4%',
            left: '16.2%'
        });
        $('#page5_img_tou2').animate({
            opacity:1,
            width: '6.4%',
            height: '13.4%',
            left: '32.3%'
        });
        $('#page5_img_tou3').animate({
            opacity:1,
            width: '6.4%',
            height: '13.4%',
            left: '48.2%'
        });
        $('#page5_img_tou4').animate({
            opacity:1,
            width: '6.4%',
            height: '13.4%',
            left: '64.0%'
        });
        $('#page5_img_tou5').animate({
            opacity:1,
            width: '6.4%',
            height: '13.4%',
            left: '79.5%'
        },function(){
            $('#page5_img_span1').animate({
                opacity:1,
                width: '11.5%',
                left: '13.3%'
            });
            $('#page5_img_span2').animate({
                opacity:1,
                width: '11.5%',
                left: '30%'
            });
            $('#page5_img_span3').animate({
                opacity:1,
                width: '11.5%',
                left: '46.0%'
            });
            $('#page5_img_span4').animate({
                opacity:1,
                width: '11.5%',
                left: '61.5%'
            });
            $('#page5_img_span5').animate({
                opacity:0.8,
                width: '11.5%',
                left: '77.4%'
            },function(){
                $('#page5 #page5_title').animate({
                    opacity:1,
                    left:'15.01%'
                },1000)
            });
        })
    })
}
// Page5 淡出
function page5_out(){
    $('#page5_img_chart1').animate({
        opacity:0,
        height: '0%'
    },1000);
    $('#page5_img_chart2').animate({
        opacity:0,
        height: '0%'
    },1000);
    $('#page5_img_chart3').animate({
        opacity:0,
        height: '0%'
    },1000);
    $('#page5_img_chart4').animate({
        opacity:0,
        height: '0%'
    },1000);
    $('#page5_img_chart5').animate({
        opacity:0,
        height: '0%'
    },1000,function(){
        $('#page5_img_tou1').animate({
            opacity:0,
            width: '4.4%',
            height: '9.4%',
            left: '17.2%'
        });
        $('#page5_img_tou2').animate({
            opacity:0,
            width: '4.4%',
            height: '9.4%',
            left: '33.3%'
        });
        $('#page5_img_tou3').animate({
            opacity:0,
            width: '4.4%',
            height: '9.4%',
            left: '49.2%'
        });
        $('#page5_img_tou4').animate({
            opacity:0,
            width: '4.4%',
            height: '9.4%',
            left: '65.0%'
        });
        $('#page5_img_tou5').animate({
            opacity:0,
            width: '4.4%',
            height: '9.4%',
            left: '80.5%'
        },function(){
            $('#page5_img_span1').animate({
                opacity:0,
                width: '6.5%',
                left: '16.3%'
            });
            $('#page5_img_span2').animate({
                opacity:0,
                width: '6.5%',
                left: '33%'
            });
            $('#page5_img_span3').animate({
                opacity:0,
                width: '6.5%',
                left: '49.0%'
            });
            $('#page5_img_span4').animate({
                opacity:0,
                width: '6.5%',
                left: '64.5%'
            });
            $('#page5_img_span5').animate({
                opacity:0,
                width: '11.5%',
                left: '80.4%'
            },function(){
                onOff=true;
                $('#page5 #page5_title').animate({
                    opacity:0,
                    left:'5.01%'
                })
            });
        })
    })
}
// 二维码
$('#saoMa').mouseover(function () { 
    $('#erCodeBox').css({
        'display':'block'
    });
    setTimeout(function(){
        $('#erCodeBox').css({
            'opacity':'1',
            'top':'10px'
        })
    },300)
});
$('#saoMa').mouseout(function () { 
    $('#erCodeBox').css({
        'display':'none',
        'opacity':'0',
        'top':'0px'
    });
});
$('#erCodeBox').mouseover(function () { 
    $('#erCodeBox').css({
        'display':'block',
        'opacity':'1',
        'top':'10px'
    })
});
$('#erCodeBox').mouseout(function () { 
    $('#erCodeBox').css({
        'display':'none',
        'opacity':'0',
        'top':'0px'
    })
});
// 鼠标滚轮事件
document.onmousewheel=function(ev){
    if(onOff){
        if(ev.wheelDelta>0){
            n--;
            if(n<1){n=1};
            tab2();
            btnClick()
        }else{
            n++;
            if(n>5){n=5};
            tab2();
            btnClick()
        }
    }
}