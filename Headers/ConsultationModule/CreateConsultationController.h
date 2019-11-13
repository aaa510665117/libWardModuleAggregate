//
//  CreateConsultationController.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/2/27.
//  Copyright © 2019年 Ran. All rights reserved.
//  创建会诊申请

#import "BaseViewController.h"
#import "PatientModel.h"
#import "CstSpeechModel.h"

@interface CreateConsultationController : BaseViewController

@property (nonatomic,strong) PatientModel * model;

/**
 如果有值,代表是语音识别后跳转
 */
@property (nonatomic,strong) CstSpeechModel * speechModel;

@end
