//
//  ToastManager.h
//  Dolphin
//
//  Created by Jiaji Yin on 11/12/11.
//  Copyright (c) 2011 Bainainfo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MBProgressHUD/MBProgressHUD.h>


@interface ToastManager : NSObject

+ (instancetype)sharedInstance;

//*****************以下 默认主线程显示**********************//
- (void)showToast:(NSString *)toastText containerView:(UIView *)containerView ;

+ (void)showToast:(NSString *)toastText imageName:(NSString *)imageName containerView:(UIView *)containerView;

+ (void)showToast:(NSString *)toastText containerView:(UIView *)containerView withTime:(NSTimeInterval)time;

+ (void)showToast:(NSString *)toastText containerView:(UIView *)containerView;

+ (void)showToast:(NSString *)toastText imageName:(NSString *)imageName;
//*****************以上 默认主线程显示**********************//


+ (MBProgressHUD*)showProgressIndicator:(NSString*)toastText containerView:(UIView*)containerView;

//+ (void)showToast:(NSString *)toastText withTime:(NSTimeInterval)time;

//+ (void)showToast:(NSString *)toastText;

//+ (void)showToastWithKeyWindow:(NSString *)toastText withTime:(NSTimeInterval)time;

@end
