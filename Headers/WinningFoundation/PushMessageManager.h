//
//  PushMessageManager.h
//  MobileDoctor
//
//  Created by ZY on 2019/8/8.
//  Copyright © 2019 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
//JPush
#import <JPush/JPUSHService.h>
// iOS10 注册 APNs 所需头文件
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

@interface PushMessageManager : NSObject

+ (PushMessageManager *)sharePushManager;

/**
 注册极光推送

 @param delegate 极光推送的delegate
 @param launchOptions AppDelegate程序启动的原因
 @param hospitalName 医院名称
 */
-(void)registerPush:(id<JPUSHRegisterDelegate>)delegate launchOptions:(NSDictionary *)launchOptions withHospitalName:(NSString *)hospitalName;

/**
 设置标签

 @param tags 标签名称
 */
-(void)setPushTag:(NSSet<NSString *> *)tags;
/*
   直接处理接受消息
 */
-(void)dealPushMessage:(NSDictionary *)userInfo;

/*
 校准显示角标
 */
-(void)calibrationBadgeNumber;

/*
   暂存未读消息-用于登录后跳页
 */
-(void)savePushUserInfo:(NSDictionary *)userInfo;

/*
   获取暂存未读消息-用于登录后跳页
 */
-(NSArray *)getPushUserInfo;

/*
   清空暂存未读消息-用于登录后跳页
 */
-(void)clearPushUserInfo;

@end
