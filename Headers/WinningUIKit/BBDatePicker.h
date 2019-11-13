//
//  BBDatePicker.h
//  YiDongChaFang
//
//  Created by winning on 16/8/19.
//  Copyright © 2016年 winning. All rights reserved.
//

//#import "DatePickLeftView.h"
//#import "DatePickRightView.h"
#import "KMLeftDatePicker.h"
#import "KMRightDatePicker.h"


@protocol BBDatePickerDelegate <NSObject>

- (void)datePickReturn:(NSString *)leftBeginStr andStopTime:(NSString *)rightStopStr;

@end

@interface BBDatePicker : UIViewController <KMLeftDatePickerDelegate,KMRightDatePickerDelegate>
@property (nonatomic,weak) id<BBDatePickerDelegate>delegate;
@property (nonatomic,strong)UIView * backGroundView;
@property (nonatomic,assign) float backGroundViewWidth;
@property (nonatomic,assign) float datepickeWidth;
@property (nonatomic,strong) NSString *isToMunite;                   //是否精确到分 0|1
@property (nonatomic,strong) NSString *isTwo;                        //是否需要两个时间选择器 0|1
@property (nonatomic,strong) NSString *titleStr;                     //传入的主题 @""|@"hello"
@property (nonatomic,strong) NSString *begintime;                    //开始的时间
@property (nonatomic,strong) NSString *endTime;                      //结束的时间
@property (nonatomic,strong) NSString *minTime;                      //最小时间
@property (nonatomic,strong) NSString *maxTime;                      //最大时间
@property (nonatomic,assign) KMLeftDatePickerStyle leftDateType;
@property (nonatomic,assign) KMRightDatePickerStyle rightDateType;
@property (nonatomic,strong) NSString *leftDatePickResultStr;        //开始时间返回结果
@property (nonatomic,strong) NSString *rightDatePickResultStr;       //结束时间返回结果
@property (nonatomic,strong) UIView *coverView;                      //放置日期选择器的背景图
@property (nonatomic,strong) KMLeftDatePicker * datePickLeftView;
@property (nonatomic,strong) KMRightDatePicker * datePickRightView;
@property (nonatomic,strong) UILabel *grayLabel;
@property (nonatomic,strong) UIButton *centerBtn;
@property (nonatomic,strong) UIButton *titleBtn;                     //主题按钮
@property (nonatomic,strong) UIButton *beginLeftBtn;                 //左标题按钮
@property (nonatomic,strong) UIButton *stopRightBtn;                 //右标题按钮
@property (nonatomic,strong) UILabel *topHorizontalGrayLabel;
@property (nonatomic,strong) UIButton *cancelBtn;                    //取消按钮
@property (nonatomic,strong) UIButton *sendBtn;                      //确定按钮
 
 

@end
