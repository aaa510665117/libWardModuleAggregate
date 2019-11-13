//
//  BaseViewController.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/10.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "HttpRequestManager.h"
#import "UITableView+Extention.h"
#import "WinningUIKit.h"

@interface BaseViewController : UIViewController

@property(nonatomic, assign) BOOL isNoScreenShot;       //禁止截屏  默认-NO
/**
 返回操作-子类可重写
 */
-(void)gotoBack;

@end
