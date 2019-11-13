//
//  XXDevice.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/2/2.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XXDevice : NSObject

+ (XXDevice *)sharedDevice;

/**
 设备信号
 */
-(const NSString *)getDeviceName;

/**
 设备系统版本
 */
-(NSString *)getSystemVersion;

/**
 Mac地址
 */
- (NSString *)getMacAddress;

/**
 获取ip
 */
- (NSString *)getDeviceIPAddresses;

/**
 设备唯一标识符 - UUID
 */
-(NSString *)getUUID;

@end
