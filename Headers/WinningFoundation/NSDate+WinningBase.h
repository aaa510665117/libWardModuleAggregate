//
//  NSDate+WinningBase.h
//  WinningFoundation
//
//  Created by winning on 2019/4/30.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger, WinningDatePeriodType) {
    WinningDatePeriodTypeWeek,
    WinningDatePeriodTypeMonth
};

typedef enum : NSUInteger {
    WNDateFormatTypeyyyyMMddHHmmss,
    WNDateFormatTypeyyyyMMdd,
    WNDateFormatTypeHHmmss,
} WNDateFormatType;

NS_ASSUME_NONNULL_BEGIN

@interface NSDate (WinningBase)


/**
 时间戳
 */
+ (NSString*)currentTimeByJava;

//---------------------时间字符串---------------------

- (NSString *)stringWithFormat:(NSString *)format;

- (NSString *)stringWithFormatType:(WNDateFormatType)dateFormatType;

/**
 今日时间的标准格式
 
 @return yyyy-MM-dd 
 */
+(NSString *)TodayStringWithNormalFormat;

//返回当前时间链 yyyyMMddHHmmss
+ (NSString *)stringLoacalDate;


//---------------------指定某天---------------------
// return date string with yyyy-MM-dd format by default
- (NSString*)nextDateWithPeriodType:(WinningDatePeriodType)periodType period:(NSInteger)period;
- (NSString*)nextDateWithPeriodType:(WinningDatePeriodType)periodType period:(NSInteger)period dateFormat:(NSString*)dateFormat;


//---------------------时间对象---------------------
+ (NSDate *)oneWeakBeforeDate;

- (NSDate*)dateByAddingNumberOfDays: (NSInteger)numberOfDays;

// date from string with yyyy-MM-dd format
+ (NSDate*)dateFromyyyyMMddFormatString: (NSString*)string;

+ (NSDate*)dateFromyyyyMMddFormatString: (NSString*)string formart:(NSString*)format;

@end

NS_ASSUME_NONNULL_END
