//
//  KMLeftDatePicker.h
//  YiDongChaFang
//
//  Created by winning on 16/8/19.
//  Copyright © 2016年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "KMDatePickerDateModel.h"

typedef NS_ENUM(NSUInteger, KMLeftDatePickerStyle) {
    KMLeftDatePickerYearMonthDay = 0,
    KMLeftDatePickerYearMonthDayHourMinute = 1,
    KMLeftDatePickerMonthDayHourMinute,
    KMLeftDatePickerHourMinute
};


@protocol KMLeftDatePickerDelegate;
@interface KMLeftDatePicker : UIView <UIPickerViewDataSource, UIPickerViewDelegate>
@property (nonatomic, weak) id<KMLeftDatePickerDelegate>  delegate;
@property (nonatomic, assign) KMLeftDatePickerStyle datePickerStyle;
@property (nonatomic, strong) NSDate *minLimitedDate; ///< 最小限制时间；默认值为1970-01-01 00:00
@property (nonatomic, strong) NSDate *maxLimitedDate; ///< 最大限制时间；默认值为2060-12-31 23:59
@property (nonatomic, strong) NSDate *defaultLimitedDate; ///< 默认限制时间；默认值为最小限制时间，当选择时间不在指定范围，就滚动到此默认限制时间
@property (nonatomic, strong) NSDate *scrollToDate; ///< 滚动到指定时间；默认值为当前时间

- (instancetype)initWithFrame:(CGRect)frame delegate:(id<KMLeftDatePickerDelegate>)delegate datePickerStyle:(KMLeftDatePickerStyle)datePickerStyle;

/**
 *  滚动到当前位置
 *
 *  @param date <#date description#>
 */
- (void)scrollToDateIndexPositionWithDate:(NSDate *)date;

@end

@protocol KMLeftDatePickerDelegate <NSObject>
@required
- (void)dateleftPicker:(KMLeftDatePicker *)datePicker didSelectDate:(KMDatePickerDateModel *)datePickerDate;

@end