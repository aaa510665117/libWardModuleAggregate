//
//  CommonVastDataCenter.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/6/7.
//  Copyright © 2018年 Ran. All rights reserved.

// 公用数据类 - 存储大型数据 - 

#import <Foundation/Foundation.h>
#import "CommonVastDataRecord.h"

//*********************存储大型数据的key*********************//
static NSString * const CVD_SPEECH = @"speech";//语音命令数组
static NSString * const CVD_DEPT = @"dept";//科室数据 - 已排序
static NSString * const CVD_DEPTINDEX = @"deptIndex";//科室索引数据 - 已排序

@interface CommonVastDataCenter : NSObject

+ (instancetype)shareInstance;

/**
 存储内容为json字符串
 */
-(BOOL)insertCommonData:(CommonVastDataRecord *)record;

/**
 根据key 查找该 json 内容
 返回 json字符串 - 拿到后再解析
 */
-(NSString *)fetchContentWith:(NSString *)key;

/**
 清空数据
 */
- (BOOL)removeAllRecord;

/**
 请求并储存科室数据
 */
-(void)requestAndSaveDeptData;

@end
