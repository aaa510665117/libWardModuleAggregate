//
//  CommonVastDataRecord.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/6/7.
//  Copyright © 2018年 Ran. All rights reserved.
//公用大型数据类

#import <CTPersistance/CTPersistance.h>
#import <YYModel/YYModel.h>

@interface CommonVastDataRecord : CTPersistanceRecord

@property (nonatomic,copy)NSNumber *auto_ID;

/**
 存储大型数据的key
 */
@property (nonatomic,copy) NSString * key;

/**
 数据数组
 */
@property (nonatomic,strong) NSString * contentJson;

@end
