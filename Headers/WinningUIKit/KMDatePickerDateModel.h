//
//  KMDatePickerDateModel.h
//  YiDongChaFang
//
//  Created by winning on 16/8/19.
//  Copyright © 2016年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface KMDatePickerDateModel : NSObject
@property (nonatomic, copy) NSString *year;
@property (nonatomic, copy) NSString *month;
@property (nonatomic, copy) NSString *day;
@property (nonatomic, copy) NSString *hour;
@property (nonatomic, copy) NSString *minute;
@property (nonatomic, copy) NSString *weekdayName;

- (instancetype)initWithDate:(NSDate *)date;

@end
