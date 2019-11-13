//
//  KMRightDatePicker.h
//  YiDongChaFang
//
//  Created by winning on 16/8/19.
//  Copyright © 2016年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "KMDatePickerDateModel.h"

typedef NS_ENUM(NSUInteger, KMRightDatePickerStyle) {
    KMRightDatePickerYearMonthDay = 0,
    KMRightDatePickerYearMonthDayHourMinute = 1,
    KMRightDatePickerMonthDayHourMinute,
    KMRightDatePickerHourMinute
};

@protocol KMRightDatePickerDelegate;
@interface KMRightDatePicker : UIView <UIPickerViewDataSource, UIPickerViewDelegate>
@property (nonatomic, assign) id delegate;
@property (nonatomic, assign) KMRightDatePickerStyle datePickerStyle;
@property (nonatomic, strong) NSDate *minLimitedDate; ///< 最小限制时间；默认值为1970-01-01 00:00
@property (nonatomic, strong) NSDate *maxLimitedDate; ///< 最大限制时间；默认值为2060-12-31 23:59
@property (nonatomic, strong) NSDate *defaultLimitedDate; ///< 默认限制时间；默认值为最小限制时间，当选择时间不在指定范围，就滚动到此默认限制时间
@property (nonatomic, strong) NSDate *scrollToDate; ///< 滚动到指定时间；默认值为当前时间

- (instancetype)initWithFrame:(CGRect)frame delegate:(id)delegate datePickerStyle:(KMRightDatePickerStyle)datePickerStyle;

/**
 *  滚动到当前位置
 *
 *  @param date <#date description#>
 */
- (void)scrollToDateIndexPositionWithDate:(NSDate *)date;
@end

@protocol KMRightDatePickerDelegate <NSObject>
@required
- (void)daterightPicker:(KMRightDatePicker *)datePicker didSelectDate:(KMDatePickerDateModel *)datePickerDate;

@end
