//
//  RecordViewController.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/8/16.
//  Copyright © 2017年 Ran. All rights reserved.
//
//病历 H5 展示
//一种是 请求得到pdf的URL直接加载
//一种是 加载本地HTML脚本框架,请求得到html内容,通过JS调用H5展示

#import "BaseViewController.h"

@interface RecordViewController : BaseViewController

@property (nonatomic,copy) NSString * ID;
@property (nonatomic,copy) NSString * patid;
@property (nonatomic,strong) NSString *titleStr;


/**
 是否隐藏截图按钮
 */
@property (nonatomic,assign) BOOL  isHiddenShot;

@end
