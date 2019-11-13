//
//  WinningUtilities.h
//  WinningFoundation
//
//  Created by winning on 2019/5/24.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface WinningUtilities : NSObject
/*将NSDate转换成格式化字符串*/
+ (NSString *)stringWithDayMonthHourMinuteFormatDate: (NSDate*)date;
/*讲NSDate转换成格式化字符串*/
+ (NSString *)stringWithoutZeroWithDayMonthHourMinuteFormatDate: (NSDate*)date;
/*根据时间戳和当前时间对比 比如 几分钟前*/
+ (NSString *)timeLineIssued:(NSTimeInterval)timeInterval;
/*微秒转行成时间月-日字符串*/
+ (NSString *)mmddTypeDateStringWithMicrosecond:(NSTimeInterval)microsecond
;
/*微秒转行成时间月-日 时:分字符串*/
+ (NSString *)mm2_ddBHHmmTypeDateStringWithMicrosecond:(NSTimeInterval)microsecond;
/*微秒转行成时间月-日 时:分字符串，不带0*/
+ (NSString *)mm2_ddBHHmmTypeDateStringWithoutZeroWithMicrosecond:(NSTimeInterval)microsecond;

@end

NS_ASSUME_NONNULL_END
