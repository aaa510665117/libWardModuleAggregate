//
//  WardModule.h
//  WardModule
//
//  Created by WinningMac on 2019/5/29.
//  Copyright © 2019 WinningMac. All rights reserved.
//  组件配置类  网络，数据库相关

#import <Foundation/Foundation.h>

@interface WardModule : NSObject

@property(nonatomic, strong) NSString * ip;         //查房所需ip
@property(nonatomic, strong) NSString * port;       //查房所需端口

/*
 初始化
 */
+ (WardModule *)sharedManager;

#pragma --- 组件内部配置
/*
 设置组件ip端口
 */
-(void)setServiceIp:(NSString *)ip Port:(NSString *)port;


#pragma --- 组件内部使用
/*
 获取组件ipPort
 */
-(NSString *)getServiceIpPort;

@end
