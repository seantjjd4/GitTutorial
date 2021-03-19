<IceScene>
  <NativeResolution>
    <X>1280</X>
    <Y>720</Y>
  </NativeResolution>
  <Assets>
    <Material name="Pixel" location="pixel.png" />
    <Material name="PixelTransparent" location="pixel_transparent.png" />
    <Material name="BlurredDotParticle" location="Particles\blurred_dot.png" />
    <Material name="MelodyTrailFill" location="Particles\melody_trail_fill.png" />
    <Material name="GUISelMarker" location="Hud\selection_marker.png" />
    <Material name="GUIScrollArrowUp" location="Hud\scroll_arrow_up.png" />
    <Material name="GUIButtonBack" location="Hud\button_back.png" />
    <Material name="GUIButtonEsc" location="Hud\button_esc.png" />
    <Font name="HudNumbersFont" location="Fonts\HudNumbers.png" />
    <Font name="SmallFont" location="Fonts\SansationTextureSmall.png" />
    <Font name="NormalFont" location="Fonts\SansationTextureNormal.png" />
    <Font name="BigFont" location="Fonts\SansationTexture.png" />
  </Assets>
  <Components />
  <SceneItems />
  <Templates>
    <CompositeEntity name="GUISelectableText">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <CompositeEntityData>
        <Animations>
          <CompositeAnimation Name="Idle">
            <LerpLastFrameWithFirst>True</LerpLastFrameWithFirst>
            <Speed>1</Speed>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Idle" Duration="100">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <IsVisible>False</IsVisible>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
          <CompositeAnimation Name="Select">
            <SmoothInterpolation>True</SmoothInterpolation>
            <Speed>1</Speed>
            <LoopMax>1</LoopMax>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Idle" Duration="20">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <Scale>
                      <X>0</X>
                      <Y>0</Y>
                    </Scale>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
              <CompositeKeyFrame Name="Selected" Duration="1">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>12</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
          <CompositeAnimation Name="UnSelect">
            <SmoothInterpolation>True</SmoothInterpolation>
            <Speed>1</Speed>
            <LoopMax>1</LoopMax>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Selected" Duration="10">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>12</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
              <CompositeKeyFrame Name="Idle" Duration="1">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <Scale>
                      <X>0</X>
                      <Y>0</Y>
                    </Scale>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
          <CompositeAnimation Name="MouseSelect">
            <SmoothInterpolation>True</SmoothInterpolation>
            <Speed>1</Speed>
            <LoopMax>1</LoopMax>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Idle" Duration="6">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <Scale>
                      <X>0</X>
                      <Y>0</Y>
                    </Scale>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
              <CompositeKeyFrame Name="Selected" Duration="1">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <IsVisible>False</IsVisible>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
          <CompositeAnimation Name="MouseUnSelect">
            <SmoothInterpolation>True</SmoothInterpolation>
            <Speed>1</Speed>
            <LoopMax>1</LoopMax>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Selected" Duration="3">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <IsVisible>False</IsVisible>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>255</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
              <CompositeKeyFrame Name="Idle" Duration="1">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>2</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>0</Opacity>
                    <Scale>
                      <X>0</X>
                      <Y>0</Y>
                    </Scale>
                    <BoneReference>SelMarker</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>7</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
        </Animations>
        <SceneItemBank>
          <SceneItemBankItem Key="text">
            <TextItem name="text" fontSource="GLOBAL" fontRef="SmallFont">
              <Position>
                <X>4.286122E-16</X>
                <Y>9</Y>
              </Position>
              <Pivot>
                <X>0</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>128</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Text>Text Item</Text>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Tint>255,255,255,128</Tint>
              <Components />
              <LinkPoints />
              <Mounts />
            </TextItem>
          </SceneItemBankItem>
          <SceneItemBankItem Key="sel_marker">
            <Sprite name="sel_marker" materialSource="GLOBAL" materialRef="GUISelMarker">
              <Position>
                <X>4.286122E-16</X>
                <Y>9</Y>
              </Position>
              <Pivot>
                <X>0</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>0</Opacity>
              <Layer>2</Layer>
              <Visible>True</Visible>
              <Tint>255,255,255,0</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
          <SceneItemBankItem Key="root">
            <Sprite name="root" materialSource="GLOBAL" materialRef="PixelTransparent">
              <Position>
                <X>0</X>
                <Y>2</Y>
              </Position>
              <Pivot>
                <X>0.5</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>0</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Tint>255,0,0,0</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
        </SceneItemBank>
        <RootBone>
          <Name>Root</Name>
          <SceneItem>root</SceneItem>
          <InheritPosition>True</InheritPosition>
          <InheritScale>True</InheritScale>
          <InheritRotation>True</InheritRotation>
          <InheritVisibility>True</InheritVisibility>
          <Interpolate>True</Interpolate>
          <ChildBones>
            <Bone>
              <Name>SelMarker</Name>
              <SceneItem>sel_marker</SceneItem>
              <InheritPosition>True</InheritPosition>
              <InheritScale>True</InheritScale>
              <InheritRotation>True</InheritRotation>
              <InheritVisibility>True</InheritVisibility>
              <Interpolate>True</Interpolate>
              <ChildBones />
            </Bone>
            <Bone>
              <Name>Text</Name>
              <SceneItem>text</SceneItem>
              <InheritPosition>True</InheritPosition>
              <InheritScale>True</InheritScale>
              <InheritRotation>True</InheritRotation>
              <InheritVisibility>True</InheritVisibility>
              <Interpolate>True</Interpolate>
              <ChildBones />
            </Bone>
          </ChildBones>
        </RootBone>
        <AutoPlay>True</AutoPlay>
      </CompositeEntityData>
      <Components />
      <LinkPoints />
      <Mounts />
    </CompositeEntity>
    <TextItem name="GUIMenuTitle" fontSource="GLOBAL" fontRef="SmallFont">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>0</X>
        <Y>1</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>0.75</X>
        <Y>0.75</Y>
      </Scale>
      <Opacity>192</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <Text>Text Item</Text>
      <Scale>
        <X>0.75</X>
        <Y>0.75</Y>
      </Scale>
      <Tint>255,255,255,192</Tint>
      <Components />
      <LinkPoints />
      <Mounts />
    </TextItem>
    <Sprite name="GUIListArrowLeft" materialSource="GLOBAL" materialRef="GUISelMarker">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>0</X>
        <Y>0.5</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <FlipHorizontal>True</FlipHorizontal>
      <Tint>255,255,255,255</Tint>
      <BlendingType>Alpha</BlendingType>
      <Components />
      <LinkPoints />
      <Mounts />
    </Sprite>
    <TextItem name="GUIListText" fontSource="GLOBAL" fontRef="SmallFont">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>0.5</X>
        <Y>0.5</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>192</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <ForceIntegerPosition>True</ForceIntegerPosition>
      <Text>Text Item</Text>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Tint>255,255,255,192</Tint>
      <Components />
      <LinkPoints />
      <Mounts />
    </TextItem>
    <Sprite name="GUIListArrowRight" materialSource="GLOBAL" materialRef="GUISelMarker">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>1</X>
        <Y>0.5</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <Tint>255,255,255,255</Tint>
      <BlendingType>Alpha</BlendingType>
      <Components />
      <LinkPoints />
      <Mounts />
    </Sprite>
    <Sprite name="GUIListScrollArrowUp" materialSource="GLOBAL" materialRef="GUIScrollArrowUp">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>1</X>
        <Y>0</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <Tint>255,255,255,255</Tint>
      <BlendingType>Alpha</BlendingType>
      <Components />
      <LinkPoints />
      <Mounts />
    </Sprite>
    <Sprite name="GUIListScrollArrowDown" materialSource="GLOBAL" materialRef="GUIScrollArrowUp">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>1</X>
        <Y>1</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <FlipVertical>True</FlipVertical>
      <Tint>255,255,255,255</Tint>
      <BlendingType>Alpha</BlendingType>
      <Components />
      <LinkPoints />
      <Mounts />
    </Sprite>
    <CompositeEntity name="GUIControlMap">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <CompositeEntityData>
        <Animations>
          <CompositeAnimation Name="Idle">
            <LerpLastFrameWithFirst>True</LerpLastFrameWithFirst>
            <Speed>1</Speed>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="Default" Duration="100">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>-80</X>
                      <Y>-15</Y>
                    </Position>
                    <Scale>
                      <X>160</X>
                      <Y>30</Y>
                    </Scale>
                    <BoneReference>Background</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>-78</X>
                      <Y>-13</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <Scale>
                      <X>156</X>
                      <Y>26</Y>
                    </Scale>
                    <BoneReference>ActiveZone</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>0</X>
                      <Y>-1</Y>
                    </Position>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
          <CompositeAnimation Name="Waiting">
            <LerpLastFrameWithFirst>True</LerpLastFrameWithFirst>
            <SmoothInterpolation>True</SmoothInterpolation>
            <Speed>1</Speed>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="1" Duration="10">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>-80</X>
                      <Y>-15</Y>
                    </Position>
                    <Scale>
                      <X>160</X>
                      <Y>30</Y>
                    </Scale>
                    <BoneReference>Background</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>-78</X>
                      <Y>-13</Y>
                    </Position>
                    <Opacity>128</Opacity>
                    <Scale>
                      <X>156</X>
                      <Y>26</Y>
                    </Scale>
                    <BoneReference>ActiveZone</BoneReference>
                  </Transform>
                  <Transform>
                    <IsVisible>False</IsVisible>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
              <CompositeKeyFrame Name="2" Duration="10">
                <BoneTransforms>
                  <Transform>
                    <Position>
                      <X>-80</X>
                      <Y>-15</Y>
                    </Position>
                    <Scale>
                      <X>160</X>
                      <Y>30</Y>
                    </Scale>
                    <BoneReference>Background</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>-78</X>
                      <Y>-13</Y>
                    </Position>
                    <Opacity>192</Opacity>
                    <Scale>
                      <X>156</X>
                      <Y>26</Y>
                    </Scale>
                    <BoneReference>ActiveZone</BoneReference>
                  </Transform>
                  <Transform>
                    <IsVisible>False</IsVisible>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
        </Animations>
        <SceneItemBank>
          <SceneItemBankItem Key="text">
            <TextItem name="text" fontSource="GLOBAL" fontRef="SmallFont">
              <Pivot>
                <X>0.5</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>255</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Text>Text Item</Text>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Tint>255,255,255,255</Tint>
              <Components />
              <LinkPoints />
              <Mounts />
            </TextItem>
          </SceneItemBankItem>
          <SceneItemBankItem Key="Background">
            <Sprite name="Background" materialSource="EMBEDDED" materialRef="Pixel">
              <Position>
                <X>-80</X>
                <Y>-15</Y>
              </Position>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>160</X>
                <Y>30</Y>
              </Scale>
              <Opacity>255</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Tint>0,0,0,255</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
          <SceneItemBankItem Key="ActiveZone">
            <Sprite name="ActiveZone" materialSource="GLOBAL" materialRef="Pixel">
              <Position>
                <X>-78</X>
                <Y>-13</Y>
              </Position>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>156</X>
                <Y>26</Y>
              </Scale>
              <Opacity>128</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Tint>255,255,255,128</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
        </SceneItemBank>
        <RootBone>
          <Name>Text</Name>
          <SceneItem>text</SceneItem>
          <InheritPosition>True</InheritPosition>
          <InheritScale>True</InheritScale>
          <InheritRotation>True</InheritRotation>
          <InheritVisibility>True</InheritVisibility>
          <Interpolate>True</Interpolate>
          <ChildBones>
            <Bone>
              <Name>Background</Name>
              <SceneItem>Background</SceneItem>
              <Interpolate>True</Interpolate>
              <ChildBones>
                <Bone>
                  <Name>ActiveZone</Name>
                  <SceneItem>ActiveZone</SceneItem>
                  <Interpolate>True</Interpolate>
                  <ChildBones />
                </Bone>
              </ChildBones>
            </Bone>
          </ChildBones>
        </RootBone>
        <AutoPlay>True</AutoPlay>
      </CompositeEntityData>
      <Components />
      <LinkPoints />
      <Mounts />
    </CompositeEntity>
    <CompositeEntity name="GUIMenuBackText">
      <Position>
        <X>100</X>
        <Y>100</Y>
      </Position>
      <Pivot>
        <X>1</X>
        <Y>0</Y>
      </Pivot>
      <IsPivotRelative>True</IsPivotRelative>
      <Scale>
        <X>1</X>
        <Y>1</Y>
      </Scale>
      <Opacity>255</Opacity>
      <IsTemplate>True</IsTemplate>
      <Layer>2</Layer>
      <Visible>True</Visible>
      <CompositeEntityData>
        <Animations>
          <CompositeAnimation Name="Idle">
            <LerpLastFrameWithFirst>True</LerpLastFrameWithFirst>
            <Speed>1</Speed>
            <Life>-1</Life>
            <AutoPlay>True</AutoPlay>
            <KeyFrames>
              <CompositeKeyFrame Name="idle 1" Duration="100">
                <BoneTransforms>
                  <Transform>
                    <BoneReference>Root</BoneReference>
                  </Transform>
                  <Transform>
                    <BoneReference>Icon</BoneReference>
                  </Transform>
                  <Transform>
                    <Position>
                      <X>4</X>
                      <Y>0</Y>
                    </Position>
                    <Opacity>175</Opacity>
                    <Scale>
                      <X>0.6</X>
                      <Y>0.6</Y>
                    </Scale>
                    <BoneReference>Text</BoneReference>
                  </Transform>
                </BoneTransforms>
              </CompositeKeyFrame>
            </KeyFrames>
          </CompositeAnimation>
        </Animations>
        <SceneItemBank>
          <SceneItemBankItem Key="text">
            <TextItem name="text" fontSource="GLOBAL" fontRef="SmallFont">
              <Position>
                <X>4</X>
                <Y>0</Y>
              </Position>
              <Pivot>
                <X>0</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>0.6</X>
                <Y>0.6</Y>
              </Scale>
              <Opacity>175</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Text>Text Item</Text>
              <Scale>
                <X>0.6</X>
                <Y>0.6</Y>
              </Scale>
              <Tint>255,255,255,175</Tint>
              <Components />
              <LinkPoints />
              <Mounts />
            </TextItem>
          </SceneItemBankItem>
          <SceneItemBankItem Key="root">
            <Sprite name="root" materialSource="GLOBAL" materialRef="PixelTransparent">
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>255</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Tint>255,255,255,255</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
          <SceneItemBankItem Key="icon">
            <Sprite name="icon" materialSource="GLOBAL" materialRef="GUIButtonBack">
              <Pivot>
                <X>1</X>
                <Y>0.5</Y>
              </Pivot>
              <IsPivotRelative>True</IsPivotRelative>
              <Scale>
                <X>1</X>
                <Y>1</Y>
              </Scale>
              <Opacity>255</Opacity>
              <Layer>1</Layer>
              <Visible>True</Visible>
              <Tint>255,255,255,255</Tint>
              <BlendingType>Alpha</BlendingType>
              <Components />
              <LinkPoints />
              <Mounts />
            </Sprite>
          </SceneItemBankItem>
        </SceneItemBank>
        <RootBone>
          <Name>Root</Name>
          <SceneItem>root</SceneItem>
          <InheritPosition>True</InheritPosition>
          <InheritScale>True</InheritScale>
          <InheritRotation>True</InheritRotation>
          <InheritVisibility>True</InheritVisibility>
          <Interpolate>True</Interpolate>
          <ChildBones>
            <Bone>
              <Name>Icon</Name>
              <SceneItem>icon</SceneItem>
              <InheritPosition>True</InheritPosition>
              <InheritScale>True</InheritScale>
              <InheritRotation>True</InheritRotation>
              <InheritVisibility>True</InheritVisibility>
              <Interpolate>True</Interpolate>
              <ChildBones />
            </Bone>
            <Bone>
              <Name>Text</Name>
              <SceneItem>text</SceneItem>
              <InheritPosition>True</InheritPosition>
              <InheritScale>True</InheritScale>
              <InheritRotation>True</InheritRotation>
              <InheritVisibility>True</InheritVisibility>
              <Interpolate>True</Interpolate>
              <ChildBones />
            </Bone>
          </ChildBones>
        </RootBone>
        <AutoPlay>True</AutoPlay>
      </CompositeEntityData>
      <Components />
      <LinkPoints />
      <Mounts />
    </CompositeEntity>
  </Templates>
</IceScene>