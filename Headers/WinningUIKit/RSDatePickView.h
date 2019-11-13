//
//  RSDatePickView.h
//  DatePickDemo
//
//  Created by winning on 2018/4/23.
//  Copyright © 2018年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "NSDate+Extension.h"

/**
 *  弹出日期类型
 */
typedef enum{
    DateStyleShowYearMonthDayHourMinute  = 0,//年月日时分
    DateStyleShowMonthDayHourMinute,//月日时分
    DateStyleShowYearMonthDay,//年月日
    DateStyleShowMonthDay,//月日
    DateStyleShowHourMinute,//时分
    DateStyleShowYearMonth//年月
}DateStyle;


@interface RSDatePickView : UIView

/**
 *  确定按钮颜色
 */
@property (nonatomic,strong)UIColor *doneButtonColor;
/**
 *  年-月-日-时-分 文字颜色(默认橙色)
 */
@property (nonatomic,strong)UIColor *dateLabelColor;
/**
 *  滚轮日期颜色(默认黑色)
 */
@property (nonatomic,strong)UIColor *datePickerColor;

/**
 *  限制最大时间（默认2099）datePicker大于最大日期则滚动回最大限制日期
 */
@property (nonatomic, retain) NSDate *maxLimitDate;
/**
 *  限制最小时间（默认0） datePicker小于最小日期则滚动回最小限制日期
 */
@property (nonatomic, retain) NSDate *minLimitDate;

/**
 *  大号年份字体颜色(默认灰色)想隐藏可以设置为clearColor
 */
@property (nonatomic, retain) UIColor *yearLabelColor;

@property (nonatomic, retain) NSDate *scrollToDate;//滚到指定日期

//@property (nonatomic,copy) NSDate * startDate;


- (instancetype)initWithFrame:(CGRect)frame datePickStyle:(DateStyle)datePickerStyle;

- (instancetype)initWithFrame:(CGRect)frame datePickStyle:(DateStyle)datePickerStyle scrollToDate:(NSDate *)scrollToDate;

//滚动到指定的时间位置
- (void)getNowDate:(NSDate *)date animated:(BOOL)animated;


@end
