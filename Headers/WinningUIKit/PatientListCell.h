//
//  PatientListCell.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/18.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "PatientModel.h"

@protocol PatientListCellDelegate <NSObject>
-(void)collectPatientWithIndex:(NSInteger )index;
@end

@interface PatientListCell : UITableViewCell

@property (nonatomic,strong) PatientModel * model;
@property (nonatomic,weak) id<PatientListCellDelegate>  delegate;

//个别 cell 需要特殊处理-暴露在外
@property (nonatomic,strong) UIButton * attentionBtn;

/**
 是否为生产PPT按钮 -- 默认为NO,PPT按钮不需要收藏操作
 */
@property (nonatomic,assign) BOOL  isCreatePPT;

/**
 是否需要显示科室病区
 */
@property (nonatomic,assign) BOOL  isAddKsBq;

@end
